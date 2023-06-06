import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Coin from "./sliderImage/coin.jpg"
import Atm from "./sliderImage/atm.jpg"
import Cash from "./sliderImage/cash.jpg"
import Dollar from "./sliderImage/dollar.jpg"
import Pos from "./sliderImage/pos.jpg"
import Scan from "./sliderImage/scan.jpg"
import DataAtm from "./sliderImage/DataAtm.jpg"
import PersonalBank from "./sliderImage/pbankig.jpg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";

const Slides = () => {
  return (
    <>

      <div className="container pb-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        effect
        loop
        autoplay={{ delay: 1000}}
        // navigation
        speed={900}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={Coin} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={Dollar} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={Cash} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={Atm} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={Pos} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={Scan} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={DataAtm} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
        <SwiperSlide className="mySwiper">
          <img className="w-[600px] h-[500px] rounded-md mx-auto"
            src={PersonalBank} lazy="loading"
            alt="chicken recipe"
          />
        </SwiperSlide>
      </Swiper>
        </div>
    </>
  );
};
export default Slides;