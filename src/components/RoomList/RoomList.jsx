import React from "react";
import rooms from "../../db/rooms.json";
import {
    THeaderContainer,
    RoomListContainer,
    HeaderTitle,
    RoomListButtons,
RoomSelectors,
RoomSelector,
RoomRightBtns,
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
    Status,
} from "./RoomListStyled";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import roomImg from '../../assets/images/room.jpg';

const RoomList = () => {
  return (
      <div>
          <RoomListButtons>
              <RoomSelectors>
                  <RoomSelector>All Rooms</RoomSelector>
                  <RoomSelector>Active Employee</RoomSelector>
                  <RoomSelector>Inactive Employee</RoomSelector>
              </RoomSelectors>
              <RoomRightBtns>
                  <NewRoomBtn>+ New Room</NewRoomBtn>
                  <NewestBtn>
                      Newest <FiChevronDown />
                  </NewestBtn>
              </RoomRightBtns>
          </RoomListButtons>
          <RoomListContainer>
              <THeaderContainer>
                  <tr>
                      <HeaderTitle style={{ width: "300px" }}>
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
                  {rooms.map((room) => (
                      <RoomListCard key={room.id}>
                          <Td>
                              <RoomNameImg>
                                  <Image src={roomImg} alt="Image" />
                                  <Names>
                                      <RoomId>#{room.id}</RoomId>
                                      <RoomNumber>
                                          {room.room_number}
                                      </RoomNumber>
                                  </Names>
                              </RoomNameImg>
                          </Td>

                          <TdText>{room.bed_type}</TdText>
                          <TdText>
                              {room.room_number.toString().charAt(0)}
                          </TdText>
                          <TdText>
                              {Object.entries(room.facilities).map((facility) =>
                                  facility[1] ? (
                                      <Text>{facility[0]}, </Text>
                                  ) : null
                              )}
                          </TdText>
                          <TdText>
                              € {room.price.slice(0, -1)}
                              <span>/night</span>
                          </TdText>
                          {/* <TdText>
							{
							parseFloat(room.price.slice(0, -1).replaceAll(',', '.')) -
							parseFloat(room.price.slice(0, -1).replaceAll(',', '.'))
							% room.offer_price
							}		
						  </TdText> */}
                          <Td>
                              <Status status={room.status}>
                                  {room.status ? "Available" : "Booked"}
                              </Status>
                          </Td>
                      </RoomListCard>
                  ))}
              </TBody>
          </RoomListContainer>
      </div>
  );
};

export default RoomList;
