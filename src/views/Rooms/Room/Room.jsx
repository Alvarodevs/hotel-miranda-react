import React from "react";
import { useParams } from "react-router";
import MainContainer from "../../../components/MainContainer";
import { RoomDetailsContainer, ImageDetailsContainer } from "./RoomStyled";

const Room = () => {
   const { id } = useParams();

   return (
      <MainContainer>
         <RoomDetailsContainer></RoomDetailsContainer>
         <ImageDetailsContainer></ImageDetailsContainer>
      </MainContainer>
   );
};

export default Room;
