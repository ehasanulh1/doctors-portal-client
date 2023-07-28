import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate()

    const handleSignOut = () => {
        logOut()
            .then(() => {
              navigate('/login')  
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='justify-center items-center'>
            <h1 className='text-red-500 text-4xl'>Oops!</h1>
            <p className="text-red-500">Something went wrong!!!</p>
            <p className="text-red-400">{error.statusText || error.message}</p>
            <p className='text-3xl'>Please <button onClick={handleSignOut()}>Sign Out</button> and log back in</p>
        </div>
    );
};

export default DisplayError;