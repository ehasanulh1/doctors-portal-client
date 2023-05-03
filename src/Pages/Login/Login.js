import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    
    const handleLogin = data =>{
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 rounded-2xl shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)]'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h2 className='text-xl text-center'>login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='text' {...register("email")} className="input input-bordered w-full max-w-xs" placeholder="First name" />
                    </div>
                    <div className="form-control w-full max-w-xs pb-3">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" placeholder="First name" />
                        <label className="label"><span className="label-text-alt">Forgot Password ?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p className='text-sm py-3 text-center'>New to Doctor Portal <Link to='/signup' className='text-secondary'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;