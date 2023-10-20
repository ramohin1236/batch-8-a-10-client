import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Mycart = () => {

    const buycar =useLoaderData()
    const [users,setUsers]=useState(buycar)

    const handleDelete=(id)=>{
          
        fetch(`https://my-server-eykbfkwhc-ramohin1236.vercel.app/buycar/${id}`,{
            method: "DELETE"
           })
           .then(res=>res.json())
           .then(data=>{
      
        console.log(data)
        // if(data.deletedCount > 0){
            const remaining = users.filter(user=>user._id !== id);
            setUsers(remaining)
                // }
         
        }
       )
            console.log(id);  
    }

    // console.log(buycar)
    return (

       
    
        <div className="card card-side bg-base-100 shadow-xl container mx-auto mt-20 " >
            <div className="w-full ">
            {users.map(car=><div key={car._id}>
                <div className="card card-side bg-base-100 shadow-xl mb-10">
  <figure><img className="w-72 rounded-xl p-4" src={car.productURL2} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{car.productName}</h2>
    <p>Congratulation!</p>
    <div className="card-actions justify-end">
      <button
      onClick={()=>handleDelete(car._id)}
      className="btn bg-red-400">x</button>
    </div>
  </div>
</div>
            </div>)}

            </div>
 
  
</div>
    );
};

export default Mycart;