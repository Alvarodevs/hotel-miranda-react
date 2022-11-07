import React from 'react';
import {useParams} from 'react-router';

const Room = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>{id ? "Room id: " + id : "Rooms"}</h1>
        </div>
    );
}
 
export default Room;