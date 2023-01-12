import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from 'swiper';
import { useSelector } from "react-redux";
import { selectBooking } from "../../features/bookings/bookingsSlice";

import roomImg from '../../assets/images/room.jpg'
// Import Swiper styles
import "swiper/css";
import {
   ImageSlider,
   Container,
   Description,
   StatusFlag
} from "./SliderStyled";
import handleStatus from '../../utils/handleStatus'

const Slider = ({description, status}) => {
	const {room_images} = useSelector(selectBooking);

   return (
      <Swiper
         modules={[Navigation, Autoplay]}
         spaceBetween={50}
         slidesPerView={1}
         autoplay={{ delay: 5000 }}
         navigation
         style={{ height: "600px", borderRadius: "0 10px 10px 0" }}
         loop
      >
         <SwiperSlide style={{ position: "relative" }}>
            <StatusFlag status={status}>{handleStatus(status)}</StatusFlag>
            <ImageSlider src={room_images} alt="Room" />
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <StatusFlag status={status}>{handleStatus(status)}</StatusFlag>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <StatusFlag status={status}>{handleStatus(status)}</StatusFlag>
            <ImageSlider src={room_images} alt="Room" />
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <StatusFlag status={status}>{handleStatus(status)}</StatusFlag>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
      </Swiper>
   );
};


export default Slider;