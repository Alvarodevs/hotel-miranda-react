import React from "react";
import rooms from "../../db/rooms.json";
import {
    RoomTHeaderContainer,
    RoomListContainer,
    RoomHeaderTitle,
    RoomListButtons,
    RoomSelectors,
    RoomSelector,
    RoomRightBtns,
    NewRoomBtn,
    RoomNewestBtn,
    RoomTBody,
    RoomListCard,
    RoomNameImg,
    Image,
    Names,
    RoomId,
    RoomNumber,
    RoomTd,
    RoomTdText,
    RoomSpan,
    RoomStatus,
} from "./RoomListStyled";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import roomImg from "../../assets/images/room.jpg";

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
                    <RoomNewestBtn>
                        Newest <FiChevronDown />
                    </RoomNewestBtn>
                </RoomRightBtns>
            </RoomListButtons>
            <RoomListContainer>
                <RoomTHeaderContainer>
                    <tr>
                        <RoomHeaderTitle style={{ width: "300px" }}>
                            Room Name
                        </RoomHeaderTitle>
                        <RoomHeaderTitle>Bed Type</RoomHeaderTitle>
                        <RoomHeaderTitle>Room Floor</RoomHeaderTitle>
                        <RoomHeaderTitle className="amenitie">
                            Amenities
                        </RoomHeaderTitle>
                        <RoomHeaderTitle>Rate</RoomHeaderTitle>
                        {/* <RoomHeaderTitle>Offer Price</RoomHeaderTitle> */}
                        <RoomHeaderTitle>Status</RoomHeaderTitle>
                    </tr>
                </RoomTHeaderContainer>

                <RoomTBody>
                    {rooms.map((room) => (
                        <RoomListCard key={room.id}>
                            <RoomTd>
                                <RoomNameImg>
                                    <Image src={roomImg} alt="Image" />
                                    <Names>
                                        <RoomId>#{room.id}</RoomId>
                                        <RoomNumber>
                                            {room.room_number}
                                        </RoomNumber>
                                    </Names>
                                </RoomNameImg>
                            </RoomTd>

                            <RoomTdText>{room.bed_type}</RoomTdText>
                            <RoomTdText>
                                {room.room_number.toString().charAt(0)}
                            </RoomTdText>
                            <RoomTdText>
                                {Object.entries(room.facilities).map(
                                    (facility) =>
                                        facility[1] ? (
                                            <RoomSpan>{facility[0]}, </RoomSpan>
                                        ) : null
                                )}
                            </RoomTdText>
                            <RoomTdText>
                                € {room.price.slice(0, -1)}
                                <span>/night</span>
                            </RoomTdText>
                            {/* <RoomTdText>
							{
							parseFloat(room.price.slice(0, -1).replaceAll(',', '.')) -
							parseFloat(room.price.slice(0, -1).replaceAll(',', '.'))
							% room.offer_price
							}		
						  </RoomTdText> */}
                            <RoomTd>
                                <RoomStatus status={room.status}>
                                    {room.status ? "Available" : "Booked"}
                                </RoomStatus>
                            </RoomTd>
                        </RoomListCard>
                    ))}
                </RoomTBody>
            </RoomListContainer>
        </div>
    );
};

export default RoomList;
