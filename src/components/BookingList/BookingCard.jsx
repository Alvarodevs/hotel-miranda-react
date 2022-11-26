import React from 'react';
import {
   ListCard,
   NameImg,
   Names,
   Id,
   Title,
   Td,
   TdTextWeight,
   Span,
} from "../../styles/Table";
import { Avatar } from "../../styles/Avatar";
import avatar from "../../assets/images/Alvaro.jpg";
import moment from "moment";
import { BookingStatus } from "./BookingListStyled";
import PopUpResquests from "../PopUpRequests/PopUpResquests";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
 
const BookingCard = ({booking, handleStatus}) => {

	 return (
       <ListCard key={booking.id}>
          <Td>
             <NameImg>
                <Avatar src={avatar} alt="Image" />
                <Names>
                   <Title>{booking.guest_name}</Title>
                   <Id>#{booking.id}</Id>
                </Names>
             </NameImg>
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
             <BiDotsVerticalRounded />
          </Td>
       </ListCard>
    );
}
 
export default BookingCard;