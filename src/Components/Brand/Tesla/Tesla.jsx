import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TeslaCart from "./TeslaCart";
import { SwiperSlide,Swiper } from "swiper/react";
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from "swiper/modules";



const Tesla = () => {

    const [selectedTesla,setSelectedTesla]=useState([])

    const brand= useLoaderData();
   
    const { _id } = useParams();
    const paramsId = parseInt(_id)

    useEffect(() => {
        const details = brand.filter((brnd) => brnd.productBrand == "TESLA");
    
        setSelectedTesla(details)
    }, [brand, paramsId])
 

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
    modules={[EffectFade, Navigation
        , Pagination]}
    className="mySwiper"
  >

    {selectedTesla.map(car=><SwiperSlide 
    key={car._id}
    >
      <img className="w-full h-[540px] rounded-xl" src={car.productURL1} />
    </SwiperSlide>)}
    
  
  </Swiper>
</div>

<div className="mt-24 space-y-12">

<p className="text-center font-bold text-5xl">BMW</p>
{

    selectedTesla.map(tesla=><TeslaCart
    tesla={tesla}
    key={tesla._id}
    ></TeslaCart>)
}
</div>

    </div>
    );
};

export default Tesla;