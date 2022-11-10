import React from "react";
import { MainContainer, Logo, MenuItem, Active } from "./MenuDashboadStyled";
import { RiDashboardLine } from "@react-icons/all-files/ri/RiDashboardLine";
import { RiKey2Line } from "@react-icons/all-files/ri/RiKey2Line";
import { BiCalendarCheck } from "@react-icons/all-files/bi/BiCalendarCheck";
import { RiUser3Line } from "@react-icons/all-files/ri/RiUser3Line";
import { HiOutlinePuzzle } from "@react-icons/all-files/hi/HiOutlinePuzzle";
import { Link } from "react-router-dom";

const MenuDashboard = () => {
  return (
    <div>
      <MainContainer>
        <Logo />

        <MenuItem>
          <Active className="active" />
          <Link to="/">
            <RiDashboardLine className="dashboard" /> Dashboard
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
		  <Link to="/bookings"><BiCalendarCheck /> Bookings
        </Link>
		</MenuItem>
        <MenuItem>
          <Active className="active" /> 
		  <Link to="/guests"><RiUser3Line /> Guest
        </Link>
		</MenuItem>
        <MenuItem>
          <Active className="active" /> 
		  <Link to="/concierge"><HiOutlinePuzzle /> Concierge
        </Link>
		</MenuItem>
      </MainContainer>
    </div>
  );
};

export default MenuDashboard;
