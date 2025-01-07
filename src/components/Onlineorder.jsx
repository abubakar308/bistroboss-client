import {Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"

import 'swiper/css';
import 'swiper/css/pagination';
import Shared from "../shared/Shared";

const Onlineorder = () => {
    return (
        <div>
             <Shared text="from 11:00am to 10:30pm" title="order online"></Shared>
            <Swiper
        modules={[Pagination]}
         className="mySwiper mb-20"
       
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="uppercase text-white -mt-12 text-center">salad</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} alt="" />
        <p className="uppercase text-white -mt-12 text-center">soup</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} alt="" />
        <p className="uppercase text-white -mt-12 text-center">pizza</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} alt="" />
        <p className="uppercase text-white -mt-12 text-center">desert</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} alt="" />
        <p className="uppercase text-white -mt-12 text-center">salad</p>
        </SwiperSlide>
        ...
      </Swiper>
        </div>
    );
};

export default Onlineorder;