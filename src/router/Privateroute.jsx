/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FirebaseAuthContext } from "../Components/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {

    const {user,loading}= useContext(FirebaseAuthContext)

    const location= useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }

    return <Navigate state={location.pathname} 
    to='/layout/login'
    ></Navigate>
    
};

export default Privateroute;