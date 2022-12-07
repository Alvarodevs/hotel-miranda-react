import React from 'react';
import {useParams} from 'react-router';
import MainContainer from '../MainContainer';
import {BookingDetailsContainer, ImageDetailsContainer} from './BookingStyled';

const Booking = () => {
    const {id} = useParams();

    return (
       <MainContainer>
          <BookingDetailsContainer>
				
			 </BookingDetailsContainer>
          <ImageDetailsContainer></ImageDetailsContainer>
       </MainContainer>
    );
}
 
export default Booking;