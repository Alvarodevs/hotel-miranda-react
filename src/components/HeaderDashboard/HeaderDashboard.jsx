import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import {
    HeaderContainer,
    TitleContainer,
    Logo,
    Site,
} from "./HeaderDashbStyled";

const HeaderDashboard = () => {
    const [title, setTitle] = useState("");
	const {id} = useParams();
    const { pathname } = useLocation();
    const location = useLocation();
    
    console.log("ID", id);

    useEffect(() => {
        if (pathname === "/dashboard") {
            setTitle("Dashboard");
        } else if (pathname === "/rooms") {
            setTitle("Rooms list");
        } else if (pathname.includes("room")) {
            setTitle(`Room ${id}`);
        } else if (pathname === "/bookings") {
            setTitle("Bookings list");
        } else if (id && pathname.includes("booking")) {
            setTitle(`Booking ${id}`);
        } else if (pathname === "/guests") {
            setTitle("Guests list");
        } else if (id && pathname.includes("guest")) {
            setTitle(`Guest ${id}`);
        } else if (pathname === "/users") {
            setTitle("Users list");
        } else if (id && pathname.includes("user")) {
            setTitle(`User ${id}`);
        } else if (pathname === "/concierge") {
            setTitle("Concierge");
        }
    }, [location]);

    return (
        <HeaderContainer path={pathname}>
            <TitleContainer>
                <Logo>logo</Logo>
                <Site>{title}</Site>
            </TitleContainer>
        </HeaderContainer>
    );
};

export default HeaderDashboard;
