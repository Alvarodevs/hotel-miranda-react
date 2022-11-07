import React from 'react';

import { useLocation } from 'react-router';

const Booking = () => {
    const {id} = useLocation();

    return <div>Booking id: {id}</div>;
}

export default Booking;