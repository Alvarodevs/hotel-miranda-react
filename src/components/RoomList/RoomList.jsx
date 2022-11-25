import React, { useState, useEffect } from "react";
import {
   ListButtonsContainer,
   Selectors,
   Selector,
   NewBtnsContainer,
} from "../../styles/ListButtons";
import { NewRoomBtn, RoomNewestBtn, RoomStatus } from "./RoomListStyled";
import {
   ListContainer,
   THeaderContainer,
   HeaderTitle,
   TBody,
} from "../../styles/Table";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import roomImg from "../../assets/images/room.jpg";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import Pagination from "../Pagination/";
import MainContainer from "../MainContainer";
import { useDispatch, useSelector } from "react-redux";
import {
   getRooms,
   selectRooms,
   selectStatus,
} from "../../features/rooms/roomsSlice";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";
import RoomCard from "./RoomCard";

const RoomList = () => {
   const roomsRedux = useSelector(selectRooms);

   //states for pagintation
   const [currentPage, setCurrentPage] = useState(1);
   const [roomsPerPage, setRoomsPerPage] = useState(10);

   const dispatch = useDispatch();
   const appState = useSelector(selectStatus);

   //states for filtering
   const [roomStatus, setRoomStatus] = useState("");
   const [roomsFiltered, setRoomsFiltered] = useState([]);
	

   useEffect(() => {
      dispatch(getRooms());
   }, [dispatch]);

   function boolean() {
      if (roomStatus === "ok") {
         return true;
      }
      if (roomStatus === "ko") {
         return false;
      }
      if (roomStatus === "") {
         return;
      }
   }

   //Effect for filtering by booked or not
   useEffect(() => {
      const roomsToFilter = roomsRedux;
      const roomsFiltered = roomsToFilter.filter(
         (room) => room.status === boolean()
      );
      setRoomsFiltered(roomsFiltered);
      setCurrentPage(1);
   }, [roomStatus]);

   const setAllRooms = () => {
      setRoomStatus("");
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

   //change pagination,
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const buttonsPaginate = (direction) => {
      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(roomsRedux.length / roomsPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };
   //----------------------
   //console.log(roomsRedux);
   return (
      <MainContainer>
         <ListButtonsContainer>
            <Selectors>
               <Selector onClick={(e) => setAllRooms()}>All Rooms</Selector>
               <Selector
                  onClick={(e) => {
                     setRoomStatus("ok");
                  }}
               >
                  Available Rooms
               </Selector>
               <Selector onClick={(e) => setRoomStatus("ko")}>
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

            <TBody>
               {appState === "loading" && <h1>Loading...</h1>}
               {appState === 'ok' &&
                  currentRoomsRedux.map((room) => (
                     <RoomCard key={room.id} room={room} />
                  ))}

               {/* {appState === "ok" &&
                  roomStatus !== "" &&
                  currentRoomsFiltered.map((room) => (
                     <RoomCard key={room.id} room={room} />
                  ))} */}
            </TBody>
         </ListContainer>
         <Pagination
            itemsPerPage={roomsPerPage}
            numOfItems={!roomStatus ? roomsRedux.length : roomsFiltered.length}
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </MainContainer>
   );
};

export default RoomList;
