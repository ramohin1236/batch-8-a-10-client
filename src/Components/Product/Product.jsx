import { useEffect, useState } from "react";
import Cart from "./Cart";


const Product = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])

    return (
      <div className="mb-16">
        <h1 className="text-5xl text-center font-bold mt-6 ">Products</h1>
         <div className= "mt-16 container mx-auto grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {product.map(signleP=><Cart
            key={signleP._id}
            signleP={signleP}
            ></Cart>)}
        </div>
      </div>
    );
};

export default Product;