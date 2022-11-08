import { createContext, useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    // declare state
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    // Google signup and login 
    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // user observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    // Sign Out user
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }


    // Provide all auth information
    const authInfo = {
        user,
        setUser,
        loading,
        logOut,
        signInGoogle
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;