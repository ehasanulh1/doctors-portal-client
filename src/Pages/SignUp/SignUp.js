import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);

    const navigate = useNavigate();
    if (token) {
        navigate('/');
        console.log(navigate)
    }

    const handleSignUp = (data) => {
        setSignupError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('User created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error);
                setSignupError(error.message)
            })

        const saveUser = (name, email) => {
            const user = { name, email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        console.log(data)
                        setCreateUserEmail(email)
                    }

                })
        }
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
                <p className='text-sm py-3 text-center'>Already have an account? <Link to='/login' className='text-secondary'>PLease Login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;