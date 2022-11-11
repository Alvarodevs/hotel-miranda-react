import React from "react";
import {
    MainContainer,
	LogoContainer,
    Logo,
    MenuItem,
    Active,
    UserCard,
    Avatar,
    Name,
    Email,
    ContactButton,
} from "./MenuDashboadStyled";
import { RiDashboardLine } from "@react-icons/all-files/ri/RiDashboardLine";
import { RiKey2Line } from "@react-icons/all-files/ri/RiKey2Line";
import { BiCalendarCheck } from "@react-icons/all-files/bi/BiCalendarCheck";
import { RiUser3Line } from "@react-icons/all-files/ri/RiUser3Line";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import { Link, useLocation } from "react-router-dom";

const MenuDashboard = () => {
    const { pathname } = useLocation();

    return (
        <div>
            <MainContainer path={pathname}>
                <LogoContainer>
                    <Logo/>
                </LogoContainer>
                <MenuItem>
                    <Active className="active" />
                    <Link to="/">
                        <RiDashboardLine className="dashboard" /> Dashboard
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Active className="active" />
                    <Link to="/bookings">
                        <BiCalendarCheck /> Bookings
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Active className="active" />
                    <Link to="/rooms">
                        <RiKey2Line className="key" /> Rooms
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Active className="active" />
                    <Link to="/contact">
                        <BsEnvelope /> Contact
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Active className="active" />
                    <Link to="/users">
                        <RiUser3Line /> Users
                    </Link>
                </MenuItem>
                <UserCard>
                    <Avatar />
                    <Name>William Yoquejé</Name>
                    <Email>williamyoquejé@gmail.com</Email>
                    <ContactButton>Contact Us</ContactButton>
                </UserCard>
            </MainContainer>
        </div>
    );
};

export default MenuDashboard;
