import React from 'react';
import {BookingListButtons, BookingSelectors, BookingSelector, BookingRightBtns} from './BookingListStyled';
import {FiChevronDown} from '@react-icons/all-files/fi/FiChevronDown'

const Booking = () => {
    
    return (
        <div>
            <BookingListButtons>
                <BookingSelectors>
                    <BookingSelector>All Rooms</BookingSelector>
                    <BookingSelector>Active Employee</BookingSelector>
                    <BookingSelector>Inactive Employee</BookingSelector>
                </BookingSelectors>
                <BookingRightBtns>
                    {/* <NewRoomBtn>+ New Room</NewRoomBtn>
                    <NewestBtn>
                        Newest <FiChevronDown />
                    </NewestBtn> */}
                </BookingRightBtns>
            </BookingListButtons>
        </div>
    );
}
 
export default Booking;