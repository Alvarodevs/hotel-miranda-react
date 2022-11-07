import React from 'react';
import { useLocation } from "react-router";

const Room = () => {
    const { id } = useLocation();

    return <div>Room: {id}</div>;
}

export default Room;