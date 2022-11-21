import React, { useState } from "react";
import rooms from "../../db/rooms.json";
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
   ListCard,
   NameImg,
   Image,
   Names,
   Id,
   Title,
   Td,
   TdTextWeight,
   Span,
} from "../../styles/Table";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import roomImg from "../../assets/images/room.jpg";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import Pagination from "../Pagination/";

import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import itemTypes from "../../utils/items";

const RoomList = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [roomsPerPage, setRoomsPerPage] = useState(10);

	
   const [{ isDragging }, drag] = useDrag({
      type: itemTypes.CARD,
      collect: (monitor) => ({
        isDragging: console.log(monitor.isDragging()),
		
      }),
   });

   const [{ isOver }, drop] = useDrop({
	accept: itemTypes.CARD,
	collect: (monitor) => ({
		isOver: monitor.isOver(),
	}),
   });

   const opacity = isDragging ? 0 : 1;
  

   const indexLastRoom = currentPage * roomsPerPage;
   const indexFirstRoom = indexLastRoom - roomsPerPage;
   const currentRooms = rooms.slice(indexFirstRoom, indexLastRoom);

   //change pagination
   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const buttonsPaginate = (direction) => {
      if (direction === "prev") {
         return currentPage === 1
            ? null
            : setCurrentPage((previous) => previous - 1);
      }
      if (direction === "next") {
         return currentPage === Math.ceil(rooms.length / roomsPerPage)
            ? null
            : setCurrentPage((previous) => previous + 1);
      }
   };

   return (
      <div>
         <ListButtonsContainer>
            <Selectors>
               <Selector>All Rooms</Selector>
               <Selector>Active Employee</Selector>
               <Selector>Inactive Employee</Selector>
            </Selectors>
            <NewBtnsContainer>
               <NewRoomBtn>+ New Room</NewRoomBtn>
               <RoomNewestBtn>
                  Newest <FiChevronDown />
               </RoomNewestBtn>
            </NewBtnsContainer>
         </ListButtonsContainer>
         {/* <DndProvider backend={HTML5Backend}> */}
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

            <TBody ref={drop}>
               {currentRooms.map((room, index) => (
                  <ListCard key={index} ref={drag} opacity={isDragging ? 0.5 : 1}>
                     <Td>
                        <NameImg>
                           <Image src={roomImg} alt="Image" />
                           <Names>
                              <Id>#{room.id}</Id>
                              <Title>{room.room_number}</Title>
                           </Names>
                        </NameImg>
                     </Td>

                     <TdTextWeight>{room.bed_type}</TdTextWeight>
                     <TdTextWeight>
                        {room.room_number.toString().charAt(0)}
                     </TdTextWeight>
                     <TdTextWeight>
                        {Object.entries(room.facilities).map((facility) =>
                           facility[1] ? <Span>{facility[0]}, </Span> : null
                        )}
                     </TdTextWeight>
                     <TdTextWeight>
                        € {room.price.slice(0, -1)}
                        <span>/night</span>
                     </TdTextWeight>
                     {/* CALCULATE PRICE WITH OFFER PERCENTAGE */}
                     {/* <RoomTdText>
							{
							parseFloat(room.price.slice(0, -1).replaceAll(',', '.')) -
							parseFloat(room.price.slice(0, -1).replaceAll(',', '.'))
							% room.offer_price
							}		
						  </RoomTdText> */}
                     <Td>
                        <RoomStatus status={room.status}>
                           {room.status ? "Available" : "Booked"}
                        </RoomStatus>
                     </Td>
                     <Td>
                        <BiDotsVerticalRounded className="dots" />
                     </Td>
                  </ListCard>
               ))}
            </TBody>
         </ListContainer>
         {/* </DndProvider> */}

         <Pagination
            itemsPerPage={roomsPerPage}
            items={rooms.length}
            paginate={paginate}
            page={currentPage}
            buttonsPaginate={buttonsPaginate}
         />
      </div>
   );
};

export default RoomList;
