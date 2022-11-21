import React, {useState} from "react";
import { MonthButton, BookingStatus } from "./BookingListStyled";
import {
   ListButtonsContainer,
   Selectors,
   Selector,
   NewBtnsContainer,
} from "../../styles/ListButtons";
import { NewestBtn } from "../../styles/Button";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import {
   ListContainer,
   THeaderContainer,
   HeaderTitle,
   TBody,
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
import bookings from "../../db/bookings.json";
import avatar from "../../assets/images/Alvaro.jpg";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import moment from "moment";
import PopUpResquests from "../PopUpRequests/PopUpResquests";
import Pagination from "../Pagination";
import MainContainer from "../MainContainer";

const Booking = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [bookingsPerPage, setBookingsPerPage] = useState(10);

   const indexLastRoom = currentPage * bookingsPerPage;
   const indexFirstRoom = indexLastRoom - bookingsPerPage;
   const currentBookings = bookings.slice(indexFirstRoom, indexLastRoom);

   //change pagination
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const buttonsPaginate = (direction) => {
      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(bookings.length / bookingsPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };

   const handleStatus = (status) => {
      switch (status) {
         case "Refund":
            return "Refund";
         case "Booked":
            return "Booked";
         case "Pending":
            return "Pending";
         default:
            return "Cancelled";
      }
   };

   return (
      <MainContainer>
         <ListButtonsContainer>
            <Selectors>
               <Selector>All Guests</Selector>
               <Selector>Pending</Selector>
               <Selector>Booked</Selector>
               <Selector>Canceled</Selector>
               <Selector>Refund</Selector>
            </Selectors>
            <NewBtnsContainer>
               <MonthButton>
                  1 November 2020 - 30 November 2020 <FiChevronDown />
               </MonthButton>
               <NewestBtn>
                  Newest <FiChevronDown />
               </NewestBtn>
            </NewBtnsContainer>
         </ListButtonsContainer>
         <ListContainer>
            <THeaderContainer>
               <HeaderTitle>Guest</HeaderTitle>
               <HeaderTitle>Order Date</HeaderTitle>
               <HeaderTitle>Check In</HeaderTitle>
               <HeaderTitle>Check Out</HeaderTitle>
               <HeaderTitle>Special Request</HeaderTitle>
               <HeaderTitle>Room Type</HeaderTitle>
               <HeaderTitle>Status</HeaderTitle>
            </THeaderContainer>
            <TBody>
               {currentBookings.map((booking, i) => (
                  <ListCard id={i}>
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
                        {moment(booking.order_date).format(
                           "MMM Do YYYY, h:mm:ss a"
                        )}
                     </TdTextWeight>
                     <TdTextWeight>
                        {moment(booking.check_in).format("MMM Do, YYYY")}
                        <br />
                        <Span>{moment(booking.check_in).format("h:mm a")}</Span>
                     </TdTextWeight>
                     <TdTextWeight>
                        {moment(booking.check_out).format("MMM Do, YYYY")}
                        <br />
                        <Span>
                           {moment(booking.check_out).format("h:mm a")}
                        </Span>
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
               ))}
            </TBody>
         </ListContainer>
         <Pagination
            itemsPerPage={bookingsPerPage}
            items={bookings.length}
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </MainContainer>
   );
};

export default Booking;
