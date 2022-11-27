import React, { useState, useEffect } from "react";
import {
   ListButtonsContainer,
   Selectors,
   Selector,
   NewBtnsContainer,
} from "../../styles/ListButtons";
import { NewRoomBtn, RoomNewestBtn } from "./RoomListStyled";
import {
   ListContainer,
   THeaderContainer,
   HeaderTitle,
   TBody,
} from "../../styles/Table";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import Pagination from "../Pagination/";
import MainContainer from "../MainContainer";
import { useDispatch, useSelector } from "react-redux";
import {
   getRooms,
   selectRooms,
   selectStatus,
} from "../../features/rooms/roomsSlice";
import RoomCard from "./RoomCard";
import Spiner from "../Spiner";

const RoomList = () => {
   //states for pagitation
   const [currentPage, setCurrentPage] = useState(1);
   const [roomsPerPage, setRoomsPerPage] = useState(10);

   const dispatch = useDispatch();
   const appState = useSelector(selectStatus);
   const roomsRedux = useSelector(selectRooms);

   //states for filtering
   const [roomIsAvailable, setRoomIsAvailable] = useState(true); //setter for booked or avail. rooms in filtered
   const [lengthFromRedux, setLengthFromRedux] = useState(true); //render from redux state or filtered
   const [roomsFiltered, setRoomsFiltered] = useState([]);

   useEffect(() => {
      dispatch(getRooms());
   }, [dispatch]);

   //Effect for filtering by booked or not
   useEffect(() => {
      const roomsToFilter = roomsRedux;
      const roomsFiltered = roomsToFilter.filter(
         (room) => room.status === roomIsAvailable
      );
      setRoomsFiltered(roomsFiltered);
      setCurrentPage(1);
   }, [roomIsAvailable, roomsRedux]);

   //TRIGGER FROM SELECTORS UPPER TBODY
   const setAllRooms = () => {
      setLengthFromRedux(true);
      dispatch(getRooms());
   };

   //pagination logic
   const indexLastRoom = currentPage * roomsPerPage;
   const indexFirstRoom = indexLastRoom - roomsPerPage;

   const currentRoomsRedux = roomsRedux.slice(indexFirstRoom, indexLastRoom);
   const currentRoomsFiltered = roomsFiltered.slice(
      indexFirstRoom,
      indexLastRoom
   );

   function roomsSwitch() {
      if (lengthFromRedux) {
         return currentRoomsRedux;
      } else return currentRoomsFiltered;
   }

   //change pagination,
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const buttonsPaginate = (direction) => {
      const maxLength = () => {
         return lengthFromRedux ? roomsRedux : roomsFiltered;
      };
      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(maxLength().length / roomsPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };
   //----------------------

   return (
      <MainContainer>
         <ListButtonsContainer>
            <Selectors>
               <Selector onClick={(e) => setAllRooms()}>All Rooms</Selector>
               <Selector
                  onClick={(e) => {
                     setRoomIsAvailable(true);
                     setLengthFromRedux(false);
                  }}
               >
                  Available Rooms
               </Selector>
               <Selector
                  onClick={(e) => {
                     setRoomIsAvailable(false);
                     setLengthFromRedux(false);
                  }}
               >
                  Booked Rooms
               </Selector>
            </Selectors>
            <NewBtnsContainer>
               <NewRoomBtn>+ New Room</NewRoomBtn>
               <RoomNewestBtn>
                  Newest <FiChevronDown />
               </RoomNewestBtn>
            </NewBtnsContainer>
         </ListButtonsContainer>
         <ListContainer>
            <THeaderContainer>
               <tr>
                  <HeaderTitle style={{ width: "250px" }}>
                     Room Name
                  </HeaderTitle>
                  <HeaderTitle>Bed Type</HeaderTitle>
                  <HeaderTitle>Room Floor</HeaderTitle>
                  <HeaderTitle className="amenitie">Amenities</HeaderTitle>
                  <HeaderTitle>Rate</HeaderTitle>
                  {/* <HeaderTitle>Offer Price</HeaderTitle> */}
                  <HeaderTitle>Status</HeaderTitle>
               </tr>
            </THeaderContainer>

            {/* CASE LOADING -- pending change to Spinner or Squeleton*/}
            {appState === "loading" && (
               <TBody>
                  <Spiner color={'success'}/>
               </TBody>
            )}

            {/* CASE RENDERING DATA */}
            {appState === "ok" && (
               <TBody>
                  {roomsSwitch().map((room) => (
                     <RoomCard key={room.id} room={room} />
                  ))}
               </TBody>
            )}
         </ListContainer>
         <Pagination
            itemsPerPage={roomsPerPage}
            numOfItems={
               lengthFromRedux ? roomsRedux.length : roomsFiltered.length
            }
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </MainContainer>
   );
};

export default RoomList;
