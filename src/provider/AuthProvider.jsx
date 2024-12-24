import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
        })
    }

    // hold user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    // sing in with google
    const signInWithGoogle = async () => {
        try {
            setLoading(true); // Set loading state to true
            await signInWithPopup(auth, googleProvider); // Trigger Google sign-in
            setLoading(false); // Set loading state to false after sign-in is successful
            toast.success('Log In By Google Success')
            window.location.href = '/';
        } catch (error) {
            toast.error(error.message)
            // Handle the error, e.g., display an alert to the user
        }
    }



    // login user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }




    const authInfo = {
        createUser,
        signIn,
        updateUserProfile,
        signInWithGoogle,
        setUser,
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