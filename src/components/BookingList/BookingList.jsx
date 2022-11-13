import React from 'react';
import {MonthButton} from "./BookingListStyled";
import {ListButtonsContainer, Selectors, Selector, NewBtnsContainer} from "../../styles/ListButtons";
import { NewestBtn } from '../../styles/Button';
import {FiChevronDown} from '@react-icons/all-files/fi/FiChevronDown'
import {
    ListContainer,
    THeaderContainer,
    HeaderTitle,
    TBody,
    ListCard,
    Td,
    TdTextWeight,
    Span,
    Status,
} from "../../styles/Table";

const Booking = () => {
    
    return (
        <div>
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
				
            </ListContainer>
        </div>
    );
}
 
export default Booking;