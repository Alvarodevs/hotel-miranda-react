import React from "react";
import rooms from "../../db/rooms.json";
import {ListButtonsContainer, Selectors, Selector, NewBtnsContainer} from "../../styles/ListButtons";
import {
	NewRoomBtn,
	RoomNewestBtn,
    RoomNameImg,
    Image,
    Names,
    RoomId,
    RoomNumber,
	RoomStatus
} from "./RoomListStyled";
import {
    ListContainer,
    THeaderContainer,
    HeaderTitle,
    TBody,
    ListCard,
    Td,
    TdTextWeight,
    Span,
} from "../../styles/Table";
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown";
import roomImg from "../../assets/images/room.jpg";

const RoomList = () => {
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
            <ListContainer>
                <THeaderContainer>
                    <tr>
                        <HeaderTitle style={{ width: "300px" }}>
                            Room Name
                        </HeaderTitle>
                        <HeaderTitle>Bed Type</HeaderTitle>
                        <HeaderTitle>Room Floor</HeaderTitle>
                        <HeaderTitle className="amenitie">
                            Amenities
                        </HeaderTitle>
                        <HeaderTitle>Rate</HeaderTitle>
                        {/* <HeaderTitle>Offer Price</HeaderTitle> */}
                        <HeaderTitle>Status</HeaderTitle>
                    </tr>
                </THeaderContainer>

                <TBody>
                    {rooms.map((room) => (
                        <ListCard key={room.id}>
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

                            <TdTextWeight>{room.bed_type}</TdTextWeight>
                            <TdTextWeight>
                                {room.room_number.toString().charAt(0)}
                            </TdTextWeight>
                            <TdTextWeight>
                                {Object.entries(room.facilities).map(
                                    (facility) =>
                                        facility[1] ? (
                                            <Span>{facility[0]}, </Span>
                                        ) : null
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
                        </ListCard>
                    ))}
                </TBody>
            </ListContainer>
        </div>
    );
};

export default RoomList;
