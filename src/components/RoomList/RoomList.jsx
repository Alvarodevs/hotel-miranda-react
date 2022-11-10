import React from "react";
import {
  RoomListContainer,
  MainContainer,
  HeaderTitle,
  RoomListButtons,
  Selectors,
  Selector,
  NewRoomBtn,
  NewestBtn,
  RoomListCard,
  RoomNameImg,
  Image,
  Names,
  RoomId,
  RoomNumber,
  Td,
  TdText,
  Text,
} from "./RoomListStyled";

const RoomList = ({ rooms }) => {
  return (
    <MainContainer>
      <RoomListButtons>
        <Selectors>
          <Selector>All Rooms</Selector>
          <Selector>Active Employee</Selector>
          <Selector>Inactive Employee</Selector>
        </Selectors>
        <div>
          <NewRoomBtn>+ New Room</NewRoomBtn>
          <NewestBtn>Newest</NewestBtn>
        </div>
      </RoomListButtons>
      <RoomListContainer>
        <thead>
          <tr>
            {/* <input type="checkbox" /> */}
            <HeaderTitle>Room Name</HeaderTitle>
            <HeaderTitle>Bed Type</HeaderTitle>
            <HeaderTitle>Floor</HeaderTitle>
            <HeaderTitle>Amenities</HeaderTitle>
            <HeaderTitle>Rate</HeaderTitle>
            <HeaderTitle>Offer Price</HeaderTitle>
            <HeaderTitle>Status</HeaderTitle>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <RoomListCard id={room.id}>
              <Td>
                <RoomNameImg>
                  <Image src="" alt="Image" />
                  <Names>
                    <RoomId>{room.id}</RoomId>
                    <RoomNumber>{room.room_number}</RoomNumber>
                  </Names>
                </RoomNameImg>
              </Td>

              <TdText>{room.bed_type}</TdText>
              <TdText>{room.room_number.toString().charAt(0)}</TdText>
              <TdText>
                {Object.entries(room.facilities).map((facility) =>
                  facility[1] ? <Text>{facility[0]}, </Text> : null
                )}
              </TdText>
              <TdText>
                {room.price} <span>/night</span>
              </TdText>
            </RoomListCard>
          ))}
        </tbody>
      </RoomListContainer>
    </MainContainer>
  );
};

export default RoomList;
