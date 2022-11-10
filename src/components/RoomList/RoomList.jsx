import React from "react";
import {
	THeaderContainer,
  RoomListContainer,
  HeaderTitle,
  RoomListButtons,
  Selectors,
  Selector,
  NewRoomBtn,
  NewestBtn,
  TBody,
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
    <div>
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
        <THeaderContainer>
          <tr>
            <HeaderTitle>Room Name</HeaderTitle>
            <HeaderTitle className="title">Bed Type</HeaderTitle>
            <HeaderTitle>Floor</HeaderTitle>
            <HeaderTitle className="title">Amenities</HeaderTitle>
            <HeaderTitle className="title">Rate</HeaderTitle>
            <HeaderTitle>Offer Price</HeaderTitle>
            <HeaderTitle>Status</HeaderTitle>
          </tr>
        </THeaderContainer>
        <TBody>
          {rooms.map((room) => (
            <RoomListCard key={room.id}>
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
        </TBody>
      </RoomListContainer>
    </div>
  );
};

export default RoomList;