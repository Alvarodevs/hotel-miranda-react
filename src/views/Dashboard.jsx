import React from "react";
import MenuDashboard from "../components/MenuDashboard";
import {
  BackgroundDashboard,
  HeaderInfoContainer,
} from "../styles/views/DashboardStyled";
import Theme from "../styles/Theme";
import HeaderDashboard from "../components/HeaderDashboard";
import RoomList from "../components/RoomList";

const Dashboard = () => {
  return (
    <div>
      <Theme>
        <BackgroundDashboard>
          <MenuDashboard></MenuDashboard>
          <HeaderInfoContainer>
            <HeaderDashboard />
            <RoomList />
          </HeaderInfoContainer>
        </BackgroundDashboard>
      </Theme>
    </div>
  );
};

export default Dashboard;
