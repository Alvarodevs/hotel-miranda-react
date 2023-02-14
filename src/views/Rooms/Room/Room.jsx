import React from "react";
import MainContainer from "../../../components/MainContainer";
import { RoomDetailsContainer, ImageDetailsContainer } from "./RoomStyled";

const Room = () => {

   return (
      <MainContainer>
         <RoomDetailsContainer></RoomDetailsContainer>
         <ImageDetailsContainer></ImageDetailsContainer>
      </MainContainer>
   );
};

export default Room;
