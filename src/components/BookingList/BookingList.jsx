import React from 'react';
import {
    BookingListButtons,
    BookingSelectors,
    BookingSelector,
    BookingRightBtns,
    MonthButton,
    BookingListContainer,
    BookingTHeaderContainer,
} from "./BookingListStyled";
import {FiChevronDown} from '@react-icons/all-files/fi/FiChevronDown'
import { NewestBtn } from '../../styles/Button';
import {
BookingHeaderTitle,
BookingTBody,
BookingListCard,
BookingTd,
BookingTdTextWeight,
BookingSpan,
BookingStatus} from './BookingListStyled';

const Booking = () => {
    
    return (
        <div>
            <BookingListButtons>
                <BookingSelectors>
                    <BookingSelector>All Guests</BookingSelector>
                    <BookingSelector>Pending</BookingSelector>
                    <BookingSelector>Booked</BookingSelector>
                    <BookingSelector>Canceled</BookingSelector>
                    <BookingSelector>Refund</BookingSelector>
                </BookingSelectors>
                <BookingRightBtns>
                    <MonthButton>
                        1 November 2020 - 30 November 2020 <FiChevronDown />
                    </MonthButton>
                    <NewestBtn>
                        Newest <FiChevronDown />
                    </NewestBtn>
                </BookingRightBtns>
            </BookingListButtons>
            <BookingListContainer>
                <BookingTHeaderContainer>
                    <BookingHeaderTitle>Guest</BookingHeaderTitle>
                    <BookingHeaderTitle>Order Date</BookingHeaderTitle>
                    <BookingHeaderTitle>Check In</BookingHeaderTitle>
                    <BookingHeaderTitle>Check Out</BookingHeaderTitle>
                    <BookingHeaderTitle>Special Request</BookingHeaderTitle>
                    <BookingHeaderTitle>Room Type</BookingHeaderTitle>
                    <BookingHeaderTitle>Status</BookingHeaderTitle>
                </BookingTHeaderContainer>
				
            </BookingListContainer>
        </div>
    );
}
 
export default Booking;