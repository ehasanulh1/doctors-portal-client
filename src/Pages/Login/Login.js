import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit} = useForm();
    const [loginError, setLoginError] = useState('')
    const [userEmail, setUserEmail] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const { signIn, resetPassword, providerLogin } = useContext(AuthContext);
    const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    if(token){
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email);                
                console.log(user)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(user.email)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)

            })
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        console.log(event)
        setUserEmail(email)
    }

    const handleForgetPassword = ()=>{
        if(!userEmail){
            alert('Please enter your email address.')
        }
        resetPassword(userEmail)
        .then(()=>{
            alert('Password reset email sent. Please check your email')
        })
        .catch(e=>console.error(e))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 rounded-2xl shadow-[3px_4px_10px_2px_rgba(0,0,0,0.05)]'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h2 className='text-xl text-center'>login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            onBlur={handleEmailBlur}
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
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 character" } })}
                            className="input input-bordered w-full max-w-xs"
                            placeholder="Password" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><button onClick={handleForgetPassword} className="label-text-alt">Forgot Password ?</button></label>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='text-sm py-3 text-center'>New to Doctor Portal <Link to='/signup' className='text-secondary'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;