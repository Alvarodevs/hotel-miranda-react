import React, { useRef } from "react";
import { useLocation } from "react-router";
import ReviewCard from "../ReviewCard";
import {IoArrowBackCircle, IoArrowForwardCircle} from "react-icons/io5";


import {
   ReviewsBoardContainer,
   ReviewsDashboardContainer,
   Title,
   CardsContainer,
   ButtonsContainer,
} from "./ReviewsBoardStyled";

const ReviewsBoard = () => {
   const ref = useRef(null);

   const location = useLocation();
   const isPathContact = () => {
      return location.pathname.includes("contact");
   };

   const scroll = (scrollOffset) => {
      ref.current.scrollLeft += scrollOffset;
   };

   return (
      <ReviewsBoardContainer>
         <ReviewsDashboardContainer path={isPathContact()}>
            {isPathContact() ? null : <Title>Latest Review by Customers</Title>}
            <ButtonsContainer path={isPathContact}>
               <IoArrowBackCircle onClick={() => scroll(-100)}>{"<-"}</IoArrowBackCircle>
               <IoArrowForwardCircle onClick={() => scroll(100)}>{"->"}</IoArrowForwardCircle>
            </ButtonsContainer>
            <CardsContainer ref={ref}>
               <ReviewCard />
               <ReviewCard />
               <ReviewCard />
               <ReviewCard />
               <ReviewCard />
            </CardsContainer>
         </ReviewsDashboardContainer>
      </ReviewsBoardContainer>
   );
};

export default ReviewsBoard;
