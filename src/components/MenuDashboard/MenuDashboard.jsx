import React from "react";
import { MainContainer, Logo, MenuItem, Active } from "./MenuDashboadStyled";
import { RiDashboardLine } from "@react-icons/all-files/ri/RiDashboardLine";
import { RiKey2Line } from "@react-icons/all-files/ri/RiKey2Line";
import { BiCalendarCheck } from "@react-icons/all-files/bi/BiCalendarCheck";
import { RiUser3Line } from "@react-icons/all-files/ri/RiUser3Line";
import { HiOutlinePuzzle } from "@react-icons/all-files/hi/HiOutlinePuzzle";

const MenuDashboard = () => {
  return (
    <div>
      <MainContainer>
        <Logo />
        <MenuItem>
          <Active className="active" />
          <RiDashboardLine className="dashboard" /> Dashboard
        </MenuItem>
        <MenuItem>
          <Active className="active" /> <RiKey2Line className="key" /> Rooms
        </MenuItem>
        <MenuItem>
          <Active className="active" /> <BiCalendarCheck /> Bookings
        </MenuItem>
        <MenuItem>
          <Active className="active" /> <RiUser3Line /> Guest
        </MenuItem>
        <MenuItem>
          <Active className="active" /> <HiOutlinePuzzle /> Concierge
        </MenuItem>
      </MainContainer>
    </div>
  );
};

export default MenuDashboard;
