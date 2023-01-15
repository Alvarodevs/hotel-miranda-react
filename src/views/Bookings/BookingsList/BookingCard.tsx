import React from "react";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import {
   ListCard,
   NameImg,
   Names,
   Id,
   Title,
   Td,
   TdTextWeight,
   Span,
} from "../../../styles/Table";
import { Avatar } from "../../../styles/Avatar";
import moment from "moment";
import { BookingStatus } from "../BookingsList/BookingListStyled";
import PopUpResquests from "../../../components/PopUpRequests/PopUpResquests";
import { Link } from "react-router-dom";
import { IBooking } from "../../../interfaces";

type Booking = {
   booking: IBooking;
   handleStatus: Function;
};

const BookingCard = ({ booking, handleStatus }: Booking): JSX.Element => {
   return (
      <ListCard key={booking._id}>
         <Td>
            <Link to={`/booking/${booking._id}`}>
               <NameImg>
                  <Avatar src={booking.photo} alt="Image" />
                  <Names>
                     <Title>{booking.guest_name}</Title>
                     <Id>#{booking._id}</Id>
                  </Names>
               </NameImg>
            </Link>
         </Td>

         <TdTextWeight>
            {moment(booking.order_date).format("MMM Do YYYY, h:mm:ss a")}
         </TdTextWeight>
         <TdTextWeight>
            {moment(booking.check_in).format("MMM Do, YYYY")}
            <br />
            <Span>{moment(booking.check_in).format("h:mm a")}</Span>
         </TdTextWeight>
         <TdTextWeight>
            {moment(booking.check_out).format("MMM Do, YYYY")}
            <br />
            <Span>{moment(booking.check_out).format("h:mm a")}</Span>
         </TdTextWeight>
         <Td>
            <PopUpResquests
               status={booking.status}
               data={booking.request}
            ></PopUpResquests>
         </Td>
         <TdTextWeight>{booking.room_type}</TdTextWeight>
         <Td>
            <BookingStatus status={booking.status}>
               {handleStatus(booking.status)}
            </BookingStatus>
         </Td>
         <Td>
            <Link to={`/booking/edit/${booking._id}`}>
               <BiDotsVerticalRounded />
            </Link>
         </Td>
      </ListCard>
   );
};

export default BookingCard;
