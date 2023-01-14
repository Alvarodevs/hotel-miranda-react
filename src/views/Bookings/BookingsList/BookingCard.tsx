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
         <Link to={`/booking/${booking._id}`}>
            <Td>
               <NameImg>
                  <Avatar src={booking.photo} alt="Image" />
                  <Names>
                     <Title>{booking.guest_name}</Title>
                     <Id>#{booking._id}</Id>
                  </Names>
               </NameImg>
            </Td>
         </Link>
         <TdTextWeight>
            <Link to={`/booking/${booking._id}`}>
               {moment(booking.order_date).format("MMM Do YYYY, h:mm:ss a")}
            </Link>
         </TdTextWeight>
         <TdTextWeight>
            <Link to={`/booking/${booking._id}`}>
               {moment(booking.check_in).format("MMM Do, YYYY")}
               <br />
               <Span>{moment(booking.check_in).format("h:mm a")}</Span>
            </Link>
         </TdTextWeight>
         <TdTextWeight>
            <Link to={`/booking/${booking._id}`}>
               {moment(booking.check_out).format("MMM Do, YYYY")}
               <br />
               <Span>{moment(booking.check_out).format("h:mm a")}</Span>
            </Link>
         </TdTextWeight>
         <Td>
            <PopUpResquests
               status={booking.status}
               data={booking.request}
            ></PopUpResquests>
         </Td>
         <TdTextWeight>
            <Link to={`/booking/${booking._id}`}>{booking.room_type}</Link>
         </TdTextWeight>
         <Td>
            <Link to={`/booking/${booking._id}`}>
               <BookingStatus status={booking.status}>
                  {handleStatus(booking.status)}
               </BookingStatus>
            </Link>
         </Td>
         <Td>
            <BiDotsVerticalRounded />
         </Td>
      </ListCard>
   );
};

export default BookingCard;
