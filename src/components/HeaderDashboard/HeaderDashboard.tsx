import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import {
   HeaderContainer,
   TitleContainer,
   Logo,
   Site,
   IconsContainer,
} from "./HeaderDashbStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";
import { BiBell } from "@react-icons/all-files/bi/BiBell";
import { BiCommentDetail } from "@react-icons/all-files/bi/BiCommentDetail";
import { IoMdExit } from "@react-icons/all-files/io/IoMdExit";
import LoginContext from "../../store/LoginContext";
import { logout } from "../../store/actions";
import Badge from "@mui/material/Badge";

interface IHeaderProps {
	setShow: Function,
	show: boolean
}

const HeaderDashboard = ({ setShow, show } :IHeaderProps) :JSX.Element => {

   const [state, dispatch] = useContext<any>(LoginContext);
   const navigate = useNavigate();
   const { id } = useParams();
   const { pathname } = useLocation();

	
   const setTitle = () :string | undefined => {
      if (pathname === "/dashboard") {
         return "Dashboard";
      } else if (pathname === "/rooms") {
         return "Rooms list";
      } else if (id && pathname.includes("room")) {
         return `Room ${id}`;
      } else if (pathname === "/add_room") {
         return `Room creator`;
      } else if (pathname === "/bookings") {
         return "Bookings list";
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
   };

   const handleLogout = (): void => {
      dispatch(
         logout({
            isAuth: false,
            user: { name: state.user.name, email: state.user.email },
         })
      );
      //--------------
		localStorage.removeItem("token");
      const currentItem = JSON.parse(localStorage.getItem("authenticated") || '') ;
      currentItem.isAuth = false;
      localStorage.setItem("authenticated", JSON.stringify(currentItem));
      return navigate("/login");
   };
	
   return (
      <HeaderContainer path={pathname} show={show}>
         <TitleContainer>
            <Logo>
               <FontAwesomeIcon
                  icon={show ? faBars : faArrowRight}
                  onClick={(e) => setShow((prev :boolean) => !prev)}
               />
            </Logo>
            <Site>{setTitle()}</Site>
         </TitleContainer>
         <IconsContainer>
            <Badge badgeContent={4} color="error">
               <BsEnvelope />
            </Badge>
            <Badge badgeContent={7} color="error">
               <BiBell />
            </Badge>
            <Badge badgeContent={"0"} color="primary">
               <BiCommentDetail />
            </Badge>
            <IoMdExit onClick={handleLogout} />
         </IconsContainer>
      </HeaderContainer>
   );
};

export default HeaderDashboard;
