import React from "react";
import MainContainer from "../../components/MainContainer";
import { ListButtonsContainer, Selectors, Selector, NewBtnsContainer } from "../../styles/ListButtons";
import {NewestBtn} from "../../styles/Button";

import ReviewsBoard from "../../components/ReviewsBoard";
import { FiChevronDown } from "react-icons/fi";

const ContactView = () => {
   return (
      <MainContainer>
         <ReviewsBoard />
         <ListButtonsContainer>
            <Selectors>
               <Selector
                  // onClick={() => {
                  //    setAllBookings();
                  //    setCurrentPage(1);
                  // }}
               >
                  All Customers Reviews
               </Selector>
               <Selector
                  // onClick={() => {
                  //    setBookingStatus("check_in");
                  //    setLengthFromRedux(false);
                  // }}
               >
                  Published
               </Selector>
               <Selector
                  // onClick={() => {
                  //    setBookingStatus("check_out");
                  //    setLengthFromRedux(false);
                  // }}
               >
                  Archived
               </Selector>
            </Selectors>
            <NewBtnsContainer>

               <NewestBtn>
                  Newest <FiChevronDown />
               </NewestBtn>
            </NewBtnsContainer>
         </ListButtonsContainer>
         
      </MainContainer>
   );
};

export default ContactView;
