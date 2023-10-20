import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide,Swiper  } from "swiper/react";
import HondaCart from "./HondaCart";
import 'swiper/css';

const Honda = () => {



    const [selectedHonda,setSelectedHonda]=useState([])

    const services= useLoaderData();
   
    const { _id } = useParams();
    const paramsId = parseInt(_id)
   

    useEffect(() => {
        const details = services.filter((srvc) => srvc.productBrand == "HONDA");
    
        setSelectedHonda(details)
    }, [services, paramsId])
    console.log(selectedHonda)

console.log(selectedHonda)


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

        {selectedHonda.map(car=><SwiperSlide 
        key={car._id}
        >
          <img className="w-full h-[540px] rounded-xl" src={car.productURL1} />
        </SwiperSlide>)}
        
      
      </Swiper>
    </div>

<div className="mt-24 space-y-12">

<p className="text-center font-bold text-5xl">HONDA</p>
    {

selectedHonda.map(honda=><HondaCart
        honda={honda}
        key={honda._id}
        ></HondaCart>)
    }
</div>

        </div>
    );
};

export default Honda;