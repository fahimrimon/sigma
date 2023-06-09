import React, { createContext, useEffect, useState } from 'react'
import app from '../../../firebase/firebase.config';
import {RecaptchaVerifier, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPhoneNumber, signOut} from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const setUpRecaptcha = (number) =>{
        const recaptchaVarifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
        recaptchaVarifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVarifier);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

        });

        return () =>{
            return unsubscribe();
    }
    },[])

    const authInfo ={
       user,
       loading,
       createUser,
       signIn,
       logOut,
       setUpRecaptcha
    }
  return (
    <AuthContext.Provider value={authInfo}>
   {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
