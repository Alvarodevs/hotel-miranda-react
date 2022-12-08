import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBooking, getBooking } from "../../features/bookings/bookingsSlice";
import { useParams } from "react-router";
import MainContainer from "../MainContainer";
import {
   DetailsContainer,
   BookingDetailsContainer,
   ImageDetailsContainer,
   NameIdContainer,
   NameAndDots,
   Name,
   Id,
   Dates,
   Date,
   RoomType,
   Room,
   Price,
   Night,
   Description,
   Amenities,
   AmenitiesCardsContainer, AmenitieCard,
} from "./BookingStyled";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import Slider from "../Slider";


const Booking = () => {
   const { id } = useParams();
	const dispatch = useDispatch();
	const booking = useSelector(selectBooking);
	
	useEffect(() => {
      dispatch(getBooking(id));
   }, [dispatch, id]);

	return (
      <MainContainer>
         <DetailsContainer>
            <BookingDetailsContainer>
               <NameIdContainer>
                  <NameAndDots>
                     <Name>{booking.guest_name}</Name>
                     <BiDotsVerticalRounded size={25} />
                  </NameAndDots>
                  <Id>ID {booking.id}</Id>
               </NameIdContainer>
               <Dates>
                  <Date>
                     Check In
                     <br />
                     <span>
                        {booking.check_in.slice(0, 10) +
                           " | " +
                           booking.check_in.slice(10)}
                     </span>
                  </Date>
                  <Date>
                     Check Out
                     <br />
                     <span>{booking.check_out.slice(0, 10)}</span>
                  </Date>
               </Dates>
               <RoomType>
                  <Room>
                     Room Info
                     <br />
                     <span>{booking.room_type}</span>
                  </Room>
                  <Price>
                     Price
                     <br />
                     <span>{booking.price}</span>
                     <Night> /night</Night>
                  </Price>
               </RoomType>
               <Description>{booking.room_desc}</Description>
               <Amenities>
                  Amenities
                  <br />
                  <AmenitiesCardsContainer>
                     {booking.amenities.split(",").map((item) => (
                        <AmenitieCard>{item}</AmenitieCard>
                     ))}
                  </AmenitiesCardsContainer>
               </Amenities>
            </BookingDetailsContainer>
            <ImageDetailsContainer>
               <Slider description={booking.room_desc} />
            </ImageDetailsContainer>
         </DetailsContainer>
      </MainContainer>
   );
};

export default Booking;
