import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, {Autoplay, Navigation} from 'swiper';

import roomImg from '../../assets/images/room.jpg'
// Import Swiper styles
import "swiper/css";
import {
   ImageSlider,
   Container,
   Description,
   NavigationContainer,
   Arrow,
} from "./SliderStyled";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

const Slider = ({description}) => {
	const swiper = useSwiper();

   return (
      <Swiper
         modules={[Navigation, Autoplay]}
         spaceBetween={50}
         slidesPerView={1}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
         autoplay={{ delay: 5000 }}
         effect={"slide"}
         navigation
         style={{ height: "600px", borderRadius: "0 10px 10px 0" }}
         loop
      >
         <SwiperSlide style={{ position: "relative" }}>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               {/* <NavigationContainer>
                  <BsArrowLeftSquare
                     size={30}
                     onClick={() => swiper.slidePrev()}
							className="swiper-button-prev"
                  />
                  <BsArrowRightSquare
                     size={30}
                     onClick={() => swiper.slideNext()}
							className="swiper-button-next"
                  />
               </NavigationContainer> */}
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               {/* <NavigationContainer>
                  <BsArrowLeftSquare
                     size={30}
                     onClick={() => swiper.slidePrev()}
							className="swiper-button-prev"
                  />
                  <BsArrowRightSquare
                     size={30}
                     onClick={() => swiper.slideNext()}
							className="swiper-button-next"
                  />
               </NavigationContainer> */}
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               {/* <NavigationContainer>
                  <BsArrowLeftSquare
                     size={30}
                     onClick={(e) => swiper.slidePrev()}
                  />
                  <BsArrowRightSquare
                     size={30}
                     onClick={(e) => swiper.slideNext()}
                  />
               </NavigationContainer> */}
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         <SwiperSlide>
            <ImageSlider src={roomImg} alt="Room" />
            <Container>
               {/* <NavigationContainer>
                  <BsArrowLeftSquare
                     size={30}
                     onClick={() => swiper.slidePrev()}
							className="swiper-button-prev"
                  />
                  <BsArrowRightSquare
                     size={30}
                     onClick={() => swiper.slideNext()}
							className="swiper-button-next"
                  />
               </NavigationContainer> */}
               <Description>{description.slice(0, 150)}</Description>
            </Container>
         </SwiperSlide>
         
      </Swiper>
   );
};


export default Slider;