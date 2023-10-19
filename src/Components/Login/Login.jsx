/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthContext, { FirebaseAuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";


const Login = () => {


    const {loginUser,googleSignUp}=useContext(FirebaseAuthContext)
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const location=useLocation()
    const navigate=useNavigate()

    const handleLogin =(e)=>{
        e.preventDefault()
         const form = e.target;
      
         const email = form.email.value;
     
         const password = form.password.value;
         console.log(email,password)
          
         loginUser(email,password)
         .then(result=>{
 setSuccess(Swal.fire(
                'Good job!',
                'Successfully Login!',
               
              ))

              e.target.reset()
              navigate(location?.state?location.state : "/" )
              console.log(result)
        })
        .catch((error) => {
           
            const errorMessage = error.message;
            setError(Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${errorMessage}`,
               
              }))
            console.log(errorMessage)
          });
         
        
        }


        const handleGoogleSignIn=()=>{
            googleSignUp()
            .then(result=>{
                setSuccess(Swal.fire(
                    'Good job!',
                    'Successfully Login!',
                   
                  ))
                  navigate(location?.state?location.state : "/" )
    
                console.log(result.user)
            }) 
            .catch((error)=>{
                const errorMessage = error.message;
                setError(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${errorMessage}`,
                   
                  }))
            })

        }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p  className="label-text-alt text-md">New to Automotive Motors? 
            <Link className="font-bold" to="/layout/rgs">registration</Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-outline" type="submit" value="Login" />
        </div>
      </div>
      </form>
      <div className="text-center mb-8">
        <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline w-56 ">Google</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;