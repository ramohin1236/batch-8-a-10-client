/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../../../public/firebase.config";


export const FirebaseAuthContext=createContext(null)


const provider = new GoogleAuthProvider()


const AuthContext = ({children}) => {

    const [user,setUser]= useState([])
    const [loading,setLoading]=useState(true)

    // email password create user
    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password,)
      
            
           
    }
    // login user
    const loginUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // logOut 
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // google signin

    const googleSignUp=()=>{
        return signInWithPopup(auth,provider)
    }

// onauth state change
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unsubscribe();
    }
},[])


   const info ={

    user,
    loading,
    createUser,
    loginUser,
    logOut,
    googleSignUp

   }


    return (
        <FirebaseAuthContext.Provider value={info}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export default AuthContext;