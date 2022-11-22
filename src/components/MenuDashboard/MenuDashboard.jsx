import React, {useContext} from "react";
import {
    MainContainer,
    LogoContainer,
    Logo,
    MenuItem,
    Active,
    UserCard,
    MenuAvatar,
    Name,
    Email,
    EditButton,
    FooterText,
	FooterTitle,
} from "./MenuDashboadStyled";
import { RiDashboardLine } from "@react-icons/all-files/ri/RiDashboardLine";
import { RiKey2Line } from "@react-icons/all-files/ri/RiKey2Line";
import { BiCalendarCheck } from "@react-icons/all-files/bi/BiCalendarCheck";
import { RiUser3Line } from "@react-icons/all-files/ri/RiUser3Line";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { Link, useLocation } from "react-router-dom";
import avatar from '../../assets/images/Alvaro.jpg';
import logo from "../../assets/images/logo.jpg";
import LoginContext from "../../store/LoginContext";

const MenuDashboard = () => {
    const { pathname } = useLocation();
	 const [state] = useContext(LoginContext)

    return (
        <div>
            <MainContainer path={pathname}>
                <LogoContainer>
                    <Logo src={logo} />
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
                    <MenuAvatar src={avatar} />
                    <Name>Alvaro G.</Name>
                    <Email href="mailto:alvaro.develops@gmail.com">
                        {state.user.email}
                    </Email>
                    <EditButton>Edit</EditButton>
                </UserCard>
                <FooterTitle>Hotel Miranda Admin Dashboard</FooterTitle>
                <FooterText className="rights">
                    @2022 All Rights Reserved
                </FooterText>
                <FooterText>
                    Made with{" "}
                    <span>
                        <AiFillHeart />
                    </span>{" "}
                    by{" "}
                    <a
                        href="https://www.linkedin.com/in/alvarodevs4you/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Alvaro G.
                    </a>
                </FooterText>
            </MainContainer>
        </div>
    );
};

export default MenuDashboard;
