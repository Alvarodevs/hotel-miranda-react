import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import {
   HeaderContainer,
   TitleContainer,
   Logo,
   Site,
   SearchbarContainer,
   Searchbar,
   MagnifyGlass,
   IconsContainer,
   LanguageSelect,
} from "./HeaderDashbStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBars,
   faMagnifyingGlass,
   faComment,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import { BiBell } from "@react-icons/all-files/bi/BiBell";
import { BiCommentDetail } from "@react-icons/all-files/bi/BiCommentDetail";
import { IoMdExit } from "@react-icons/all-files/io/IoMdExit";
import LoginContext from "../../store/LoginContext";
import { logout } from "../../store/actions";

const HeaderDashboard = ({setShow, show}) => {
   const [state, dispatch] = useContext(LoginContext);
	const navigate = useNavigate()
   const { id } = useParams();
   const { pathname } = useLocation();
   const location = useLocation();

	const setTitle = () => {
		if (pathname === "/dashboard") {
         return ("Dashboard");
      } else if (pathname === "/rooms") {
         return ("Rooms list");
      } else if (id && pathname.includes("room")) {
         return (`Room ${id}`);
      } else if (pathname === "/add_room") {
         return (`Room creator`);
      } else if (pathname === "/bookings") {
         return ("Bookings list");
      } else if (id && pathname.includes("booking")) {
         return `Booking ${id}`;
      } else if (pathname === "/guests") {
         return "Guests list";
      } else if (id && pathname.includes("guest")) {
         return `Guest ${id}`;
      } else if (pathname === "/users") {
         return "Users list";
      } else if (id && pathname.includes("user")) {
         return `User ${id}`;
      } else if (pathname === "/add_user") {
         return `User creator`;
      } else if (pathname === "/concierge") {
         return "Concierge";
      }
	}

	const handleLogout = (state) => {
		dispatch(logout(!state.isAuth));
		const currentItem = JSON.parse(localStorage.getItem('authenticated'))
		currentItem.isAuth = false;
		localStorage.setItem('authenticated', JSON.stringify(currentItem))
		return navigate('/login')
	}

   return (
      <HeaderContainer path={pathname} show={show}>
         <TitleContainer>
            <Logo>
               <FontAwesomeIcon icon={show ? faBars : faArrowRight} onClick={(e) => setShow(prev => !prev)}/>
            </Logo>
            <Site>{setTitle()}</Site>
         </TitleContainer>
         {/* <SearchbarContainer>
            <Searchbar />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
         </SearchbarContainer> */}
         <IconsContainer>
            {/* <AiOutlineHeart /> */}
            <BsEnvelope />
            <BiBell />
            <BiCommentDetail />

            {/* <LanguageSelect>
               <option value="EN">EN</option>
               <option value="ES">ES</option>
            </LanguageSelect> */}
            <IoMdExit onClick={handleLogout} />
         </IconsContainer>
      </HeaderContainer>
   );
};

export default HeaderDashboard;
