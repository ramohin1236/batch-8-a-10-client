import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import YamahaCart from "./YamahaCart";

const Yamaha = () => {
    const [selectedYamaha,setSelectedYamaha]=useState([])

    const services= useLoaderData();
   
    const { _id } = useParams();
    const paramsId = parseInt(_id)
   

    useEffect(() => {
        const details = services.filter((srvc) => srvc.productBrand == "YAMAHA");
    
        setSelectedYamaha(details)
    }, [services, paramsId])
    console.log(selectedYamaha)

console.log(selectedYamaha)
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

        {selectedYamaha.map(car=><SwiperSlide 
        key={car._id}
        >
          <img className="w-full h-[540px] rounded-xl" src={car.productURL1} />
        </SwiperSlide>)}
        
      
      </Swiper>
    </div>

<div className="mt-24 space-y-12">

<p className="text-center font-bold text-5xl">YAMAHA</p>
    {

selectedYamaha.map(yamaha=><YamahaCart
        yamaha={yamaha}
        key={yamaha._id}
        ></YamahaCart>)
    }
</div>

        </div>
    );
};

export default Yamaha;