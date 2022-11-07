import React from 'react';
import { useLocation } from "react-router";

const User = () => {
    const { id } = useLocation();

    return <div>User: {id}</div>;
}

export default User;