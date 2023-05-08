import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignUp = (data) =>{
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 rounded-2xl shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)]'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input
                            type='text'
                            {...register("name", { required: true })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder="First name" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
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
                    <div className="form-control w-full max-w-xs pb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            type='password'
                            {...register("password", { required: "Password is required", minLength: {value: 6, message: "Password must be 6 character"}})}
                            className="input input-bordered w-full max-w-xs"
                            placeholder="Password" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text-alt">Forgot Password ?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                </form>
                <p className='text-sm py-3 text-center'>Already have an account? <Link to='/login' className='text-secondary'>PLease Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;