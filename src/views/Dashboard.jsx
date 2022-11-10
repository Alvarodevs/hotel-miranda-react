import React from "react";
import MenuDashboard from "../components/MenuDashboard";
import {
  BackgroundDashboard,
  MainContainer,
} from "../styles/views/DashboardStyled";
import Theme from "../styles/Theme";
import HeaderDashboard from "../components/HeaderDashboard";
import RoomList from "../components/RoomList";

const Dashboard = () => {
  return (
    <div>
      <Theme>
        <BackgroundDashboard>
          
        </BackgroundDashboard>
      </Theme>
    </div>
  );
};

export default Dashboard;
