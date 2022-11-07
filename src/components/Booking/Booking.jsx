import React from 'react';
import {useParams} from 'react-router';

const Booking = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>{id ? "Booking id: " + id : "Bookings"}</h1>
        </div>
    );
}
 
export default Booking;