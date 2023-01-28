import React from "react";
import { useLocation } from "react-router";
import ReviewCard from "../ReviewCard";

import {
   ReviewsBoardContainer,
   ReviewsDashboardContainer,
   Title,
   CardsContainer
} from "./ReviewsBoardStyled";

const ReviewsBoard = (): JSX.Element => {
   const location = useLocation();

   return (
      <ReviewsBoardContainer>
         <ReviewsDashboardContainer>
            { location.pathname.includes("contact") ?
               null : <Title>Latest Review by Customers</Title>}
            <CardsContainer>
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
