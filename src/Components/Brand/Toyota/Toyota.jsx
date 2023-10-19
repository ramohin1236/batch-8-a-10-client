import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ToyataCArt from "./ToyataCArt";

const Toyota = () => {
    const [selectedToyota,setSelectedToyota]=useState([])

    const services= useLoaderData();
  
    const { _id } = useParams();
    const paramsId = parseInt(_id)
    

    useEffect(() => {
        const details = services.filter((srvc) => srvc.productBrand == "TOYOYTA");
        console.log(details);
        setSelectedToyota(details)
    }, [services, paramsId])
    console.log(selectedToyota)
    return (
        <div>
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

        {selectedToyota.map(car=><SwiperSlide 
        key={car._id}
        >
          <img className="w-full h-[540px] rounded-xl" src={car.productURL1} />
        </SwiperSlide>)}
        
      
      </Swiper>
    </div>

<div className="mt-24 space-y-12">
{/* {selectedBmw.productBrand} */}
<p className="text-center font-bold text-5xl">BMW</p>
    {

        selectedToyota.map(toyota=><ToyataCArt
        toyota={toyota}
        key={toyota._id}
        ></ToyataCArt>)
    }
</div>

        </div>
        </div>
    );
};

export default Toyota;