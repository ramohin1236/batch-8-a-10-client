import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseAuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";


const Registration = () => {

    const {createUser}=useContext(FirebaseAuthContext)
    const [error,setError]=useState('')
    const [success,setSuccess]=useState('')

    const handleRegistration =(e)=>{
        e.preventDefault()
         const form = e.target;
         const name = form.name.value;
         const email = form.email.value;
         const photo = form.photo.value;
         const password = form.password.value;
         console.log(name,email,photo,password)

        //  password valiidationn
        if(password.length <6 ){
            setError(Swal.fire({
                icon: 'error',
            
                text: 'Password should be at least 6 character!'
                
              }))
            
            return
        }
       else if(!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~]).{6,}$/.test(password)){
        setError(Swal.fire({
            icon: 'error',
        
            text: "password should have uppercase,lowercase,special charecter,and number"
            
          }))
              
                 return
        }
        else{
            setSuccess(Swal.fire(
                'Good job!',
                'User created',
                'success'
              ))
        }

         createUser(email,password)
         .then(result=>{
            console.log(result)
            setSuccess(Swal.fire(
                'Good job!',
                'user created successfully!',
                'success'
              ))
              e.target.reset()
         })
         .catch((error) => {
      
            const errorMessage = error.message;
           setError(Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${errorMessage}`,
           
          }))
            // ..
          })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
         

          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
         
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration}>
            <div className="card-body">


<div className="form-control">
    
    <label className="label">
      <span className="label-text">Name</span>
    </label>
    <input name="name" type="name" placeholder="Enter your name..." className="input input-bordered" required />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text">Photo</span>
    </label>
    <input name="photo" type="text" placeholder="Enter your photo..." className="input input-bordered" required />
  </div>

  <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="label-text">Password</span>
    </label>
    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
    <label className="label">
    <p  className="label-text-alt text-md">Alredy have an account? 
<Link className="font-bold" to="/layout/login">login</Link>
</p>
    </label>
  </div>
  <div className="form-control mt-6">
  <input className="  btn btn-outline" type="submit" value="Registration" />
  </div>
</div>
            </form>
          </div>
         
        </div>
      </div>
    );
};

export default Registration;