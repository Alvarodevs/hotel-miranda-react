import React from 'react';
import {BookingListButtons, BookingSelectors, BookingSelector, BookingRightBtns, MonthButton} from './BookingListStyled';
import {FiChevronDown} from '@react-icons/all-files/fi/FiChevronDown'
import { NewestBtn } from '../../styles/Button';

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
        </div>
    );
}
 
export default Booking;