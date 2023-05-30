import React, { createContext, useEffect, useState } from 'react';
import app from '../Pages/Athentication/Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const provider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, current => {
            setUser(current)

            if (current) {
                axios.post('http://localhost:5000/jwt', { email: current.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('token')
            }



        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser, login, logOut, user, loading, updateUserProfile, googleLogin
    }


    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;