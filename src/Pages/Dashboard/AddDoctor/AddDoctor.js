import React from 'react';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div>
            <h2 className="text-3xl mb-5">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <h2 className='text-xl text-center'>Sign Up</h2>
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
                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input
                        type='password'
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 character" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/, message: "Password must be strong" }
                        })}
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Password" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <label className="label"><span className="label-text-alt">Forgot Password ?</span></label>
                </div>
                <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                <div>
                    {
                        signupError && <p className='text-red-600'>{signupError}</p>
                    }
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;