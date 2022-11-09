import React from "react";
import {
  RoomListContainer,
  HeaderTitle,
  RoomListButtons,
  Selectors,
  Selector,
  NewRoomBtn,
  NewestBtn,
} from "./RoomListStyled";
const RoomList = () => {
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
        <thead>
          <tr>
            {/* <input type="checkbox" /> */}
            <HeaderTitle>Room Name</HeaderTitle>
            <HeaderTitle>Room Type</HeaderTitle>
            <HeaderTitle>Amenities</HeaderTitle>
            <HeaderTitle>Rate</HeaderTitle>
            <HeaderTitle>Offer Price</HeaderTitle>
            <HeaderTitle>Status</HeaderTitle>
          </tr>
        </thead>
		<tbody>
			
		</tbody>
      </RoomListContainer>
    </div>
  );
};

export default RoomList;
