import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data.image[0])
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url =`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if(imgData.success){
                console.log(imgData.data.url)
            }
        })

    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl mb-5">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input
                        type='text'
                        {...register("name", { required: "Your name is required" })}
                        className="input input-bordered w-full max-w-xs"
                        placeholder="First name" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input
                        type='text'
                        {...register("email", { required: "Email Address is required" })}
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Email" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select 
                    {...register('specialty')}
                    className="select select-bordered w-full max-w-xs">
                        {
                            specialties?.map(specialty =><option
                            key={specialty._id}
                            value={specialty.name}
                            >{specialty.name}</option>)
                        }                        
                    </select>
                </div>

                <div className="form-control w-full max-w-xs  pb-3">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input
                        type='file'
                        {...register("image", { required: "Photo is required" })}
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Upload photo" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>

                <input className='btn btn-accent w-full' value='Add Doctor' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;