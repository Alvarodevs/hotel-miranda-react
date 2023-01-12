import React, { useState, useEffect } from "react";
import { MonthButton } from "./BookingListStyled";
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
} from "../../styles/Table";
import Pagination from "../Pagination";
import MainContainer from "../MainContainer";
import {
   selectStatus,
   selectBookings,
   getBookings,
} from "../../features/bookings/bookingsSlice";
import BookingCard from "./BookingCard";
import Spiner from "../Spiner";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IBooking } from "../../interfaces/IBooking";

const Booking = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [bookingsPerPage, setBookingsPerPage] = useState<number>(10);

   const dispatch = useAppDispatch();
   const appState = useAppSelector(selectStatus);
   const bookingsRedux = useAppSelector(selectBookings);

   const [bookingStatus, setBookingStatus] = useState<string>("");
   const [lengthFromRedux, setLengthFromRedux] = useState<boolean>(true);
   const [bookingsFiltered, setBookingsFiltered] = useState<IBooking[]>([]);

   useEffect(() => {
      dispatch(getBookings());
   }, [dispatch]);

   const handleStatus = (status :string) => {
      switch (status) {
         case "check_in":
            return "Check in";
         case "check_out":
            return "Check out";
         default:
            return "In Progress";
      }
   };

   const setAllBookings = () :void => {
      setLengthFromRedux(true);
      dispatch(getBookings());
   };

   useEffect(() => {
      const bookingsToFilter = bookingsRedux;
      const bookingsFiltered = bookingsToFilter.filter(
         (booking) => booking.status === bookingStatus
      );
      setBookingsFiltered(bookingsFiltered);
      setCurrentPage(1);
   }, [bookingStatus, bookingsRedux]);

   const indexLastRoom = currentPage * bookingsPerPage;
   const indexFirstRoom = indexLastRoom - bookingsPerPage;
   const currentBookingsRedux = bookingsRedux.slice(
      indexFirstRoom,
      indexLastRoom
   );
   const currentBookingsFiltered = bookingsFiltered?.slice(
      indexFirstRoom,
      indexLastRoom
   );

   //change pagination
   const paginate = (pageNumber :number) => setCurrentPage(pageNumber);
   const maxLength = () :IBooking[] => {
      return lengthFromRedux ? bookingsRedux : bookingsFiltered
   };
   const buttonsPaginate = (direction :string) => {
      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(maxLength().length / bookingsPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };

   function bookingsSwitch() {
      if (lengthFromRedux) {
         return currentBookingsRedux;
      } else return currentBookingsFiltered;
   }

   return (
      <MainContainer>
         <ListButtonsContainer>
            <Selectors>
               <Selector
                  onClick={() => {
                     setAllBookings();
                     setCurrentPage(1);
                  }}
               >
                  All Guests
               </Selector>
               <Selector
                  onClick={() => {
                     setBookingStatus("Check in");
                     setLengthFromRedux(false);
                  }}
               >
                  Check In
               </Selector>
               <Selector
                  onClick={() => {
                     setBookingStatus("Check out");
                     setLengthFromRedux(false);
                  }}
               >
                  Check Out
               </Selector>
               <Selector
                  onClick={() => {
                     setBookingStatus("In Progress");
                     setLengthFromRedux(false);
                  }}
               >
                  In Progress
               </Selector>
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
               <tr>
                  <HeaderTitle>Guest</HeaderTitle>
                  <HeaderTitle>Order Date</HeaderTitle>
                  <HeaderTitle>Check In</HeaderTitle>
                  <HeaderTitle>Check Out</HeaderTitle>
                  <HeaderTitle>Special Request</HeaderTitle>
                  <HeaderTitle>Room Type</HeaderTitle>
                  <HeaderTitle>Status</HeaderTitle>
               </tr>
            </THeaderContainer>

            {/* CASE LOADING -- pending change to Spinner or Squeleton*/}
            {appState === "loading" && (
               <TBody>
                  <Spiner />
               </TBody>
            )}

            {/* CASE RENDERING DATA */}
            {appState === "ok" && (
               <TBody>
                  {bookingsSwitch()?.map((booking) => (
                     <BookingCard
                        key={booking.id}
                        booking={booking}
                        handleStatus={handleStatus}
                     />
                  ))}
               </TBody>
            )}
         </ListContainer>
         <Pagination
            itemsPerPage={bookingsPerPage}
            numOfItems={
               lengthFromRedux ? bookingsRedux.length : bookingsFiltered?.length
            }
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </MainContainer>
   );
};

export default Booking;
