import React from 'react';
import MenuDashboard from "../components/MenuDashboard";
import {
  BackgroundDashboard,
  MainContainer,
} from "../styles/views/DashboardStyled";
import Theme from "../styles/Theme";
import HeaderDashboard from "../components/HeaderDashboard";
import RoomList from "../components/RoomList";
import rooms from '../db/rooms.json'

const RoomsView = () => {

    return (
      <div>
        <Theme>
          <BackgroundDashboard>
            <HeaderDashboard />
            <MainContainer>
              <MenuDashboard />
              <RoomList rooms={rooms} />
            </MainContainer>
          </BackgroundDashboard>
        </Theme>
      </div>
    );
}

export default RoomsView;