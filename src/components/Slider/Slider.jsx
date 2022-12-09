import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from 'swiper';

import roomImg from '../../assets/images/room.jpg'
// Import Swiper styles
import "swiper/css";
import {
   ImageSlider,
   Container,
   Description,
   StatusFlag
} from "./SliderStyled";

const Slider = ({description, status}) => {

   return (
      <Swiper
         modules={[Navigation, Autoplay]}
         spaceBetween={50}
         slidesPerView={1}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
         autoplay={{ delay: 5000 }}
         navigation
         style={{ height: "600px", borderRadius: "0 10px 10px 0" }}
         loop
      >
         <SwiperSlide style={{ position: "relative" }}>
            <StatusFlag status={status}>{status}</StatusFlag>
            <ImageSlider src={roomImg} alt="Room"/>
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <StatusFlag status={status}>{status}</StatusFlag>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <StatusFlag status={status}>{status}</StatusFlag>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <StatusFlag status={status}>{status}</StatusFlag>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
      </Swiper>
   );
};


export default Slider;