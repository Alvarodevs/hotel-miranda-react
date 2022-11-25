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
} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import { BiBell } from "@react-icons/all-files/bi/BiBell";
import { BiCommentDetail } from "@react-icons/all-files/bi/BiCommentDetail";
import { IoMdExit } from "@react-icons/all-files/io/IoMdExit";
import LoginContext from "../../store/LoginContext";
import { logout } from "../../store/actions";

const HeaderDashboard = () => {
   const [title, setTitle] = useState("");
   const [state, dispatch] = useContext(LoginContext);
	const navigate = useNavigate()
   const { id } = useParams();
   const { pathname } = useLocation();
   const location = useLocation();

   useEffect(() => {
      if (pathname === "/dashboard") {
         setTitle("Dashboard");
      } else if (pathname === "/rooms") {
         setTitle("Rooms list");
      } else if (id && pathname.includes("room")) {
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

	const handleLogout = (state) => {
		dispatch(logout(!state.isAuth));
		const currentItem = JSON.parse(localStorage.getItem('authenticated'))
		currentItem.isAuth = false;
		localStorage.setItem('authenticated', JSON.stringify(currentItem))
		return navigate('/login')
	}

   return (
      <HeaderContainer path={pathname}>
         <TitleContainer>
            <Logo>
               <FontAwesomeIcon icon={faBars} />
            </Logo>
            <Site>{title}</Site>
         </TitleContainer>
         <SearchbarContainer>
            <Searchbar />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
         </SearchbarContainer>
         <IconsContainer>
            <AiOutlineHeart />
            <BsEnvelope />
            <BiBell />
            <BiCommentDetail />

            <LanguageSelect>
               <option value="EN">EN</option>
               <option value="ES">ES</option>
            </LanguageSelect>
            <IoMdExit onClick={handleLogout} />
         </IconsContainer>
      </HeaderContainer>
   );
};

export default HeaderDashboard;