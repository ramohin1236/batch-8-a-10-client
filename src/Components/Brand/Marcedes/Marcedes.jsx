import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import 'swiper/css';
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";
import MarcedesCart from "./MarcedesCart";

const Marcedes = () => {

    const [selectedMersedes,setselectedMersedes]=useState([])

    const mersedes= useLoaderData();
   
    const { _id } = useParams();
    const paramsId = parseInt(_id)
   

    useEffect(() => {
        const details = mersedes.filter((srvc) => srvc.productBrand == "MERCEDES-BENZ");
    
        setselectedMersedes(details)
    }, [mersedes, paramsId])
    console.log(selectedMersedes)

console.log(selectedMersedes)


    return (
        <div className=" container mx-auto mb-16 mt-9">
            
            
        <div >
  <Swiper

    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper"
  >

    {selectedMersedes.map(car=><SwiperSlide 
    key={car._id}
    >
      <img className="w-full h-[540px] rounded-xl" src={car.productURL1} />
    </SwiperSlide>)}
    
  
  </Swiper>
</div>

<div className="mt-24 space-y-12">

<p className="text-center font-bold text-5xl">MERCETES-BRENZ</p>
{

selectedMersedes.map(mar=><MarcedesCart
    mar={mar}
    key={mar._id}
    ></MarcedesCart>)
}
</div>

    </div>
    );
};

export default Marcedes;