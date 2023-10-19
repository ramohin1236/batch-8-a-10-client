import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BmwDetails = () => {
   

    const bmwData= useLoaderData()
    console.log(bmwData)
   const {productURL1,productURL2,productURL3,productName,productPrice,productType,productDescription}=bmwData

    return (
        <div className="container mx-auto ">
        <div className="border shadow-2xl m-12 p-12 bg-slate-200 rounded-3xl">
             {/* groooup nmber 1 image  */}
         <div className="flex justify-around space-x-6 ">
            <div>
                <img className="sm:w-full md:w-[550px] rounded-2xl" src={productURL1} alt="" />
            </div>
            <div>
<img  className="sm:w-full md:w-[550px] rounded-2xl" src={productURL2} alt="" />
            </div>
         </div>
         {/* groooup nmber 2 image  */}
         <div className="flex justify-evenly ">
            <div>
                <img className="w-[550] rounded-2xl" src={productURL3} alt="" />
            </div>
           
           
         </div>
         {/* description div */}
         <div className="mt-12">
            <p className="text-center text-4xl font-extrabold text-blue-700">{productName}</p>
            <p className="mt-4 text-blue-700">Type : <span className="text-2xl font-bold ">{productType}</span></p>
            <p className="text-blue-700 mt-4">Price : <span className="text-2xl  font-bold">{productPrice}</span> BDT</p>
            <p className="text-lg mt-8"> Description  : {productDescription}</p>
         </div>
         <button className="btn btn-outline w-full mt-16">Add to cart</button>
        </div>
      
        </div>
    );
};

export default BmwDetails;