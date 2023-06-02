import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    const providerLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo)=>{
        return updateProfile (user.currentUser, userInfo)
    }

    const resetPassword = (userEmail)=>{
        return sendPasswordResetEmail(auth, userEmail);
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth change')
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])

    const authInfo = {
        providerLogin,
        createUser,
        signIn,
        updateUser,
        resetPassword,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;