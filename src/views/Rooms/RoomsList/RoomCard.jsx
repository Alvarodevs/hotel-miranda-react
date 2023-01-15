import {
   ListCard,
   NameImg,
   Image,
   Names,
   Id,
   Title,
   Td,
   TdTextWeight,
   Span,
} from "../../../styles/Table";
import { RoomStatus } from "./RoomListStyled";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
   const facilitiesArray = room.facilities ? room.facilities.split(",") : [];

   return (
      <ListCard key={room._id}>
         <Td>
            <Link to={`/room/${room._id}`}>
               <NameImg>
                  <Image src={room.images} alt="Image" />
                  <Names>
                     <Id>#{room._id}</Id>
                     <Title>{room.room_number}</Title>
                  </Names>
               </NameImg>
            </Link>
         </Td>

         <TdTextWeight>
            <Link to={`/room/${room._id}`}>{room.bed_type}</Link>
         </TdTextWeight>
         <TdTextWeight className={"room-number"}>
            <Link to={`/room/${room._id}`}>{room.room_number}</Link>
         </TdTextWeight>
         <TdTextWeight>
            <Link to={`/room/${room._id}`}>
               {facilitiesArray.map((facility, i) => {
                  return (
                     <Span key={i}>
                        {facility.replace("_", " ")}
                        {i === facilitiesArray.length - 1 ? "" : ", "}
                     </Span>
                  );
               })}
            </Link>
         </TdTextWeight>
         <TdTextWeight>
            <Link to={`/room/${room._id}`}>
               {`€ ${(room.price / 1000).toString().slice(0, 5)}`}
               <span>/night</span>
            </Link>
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
            <Link to={`/room/${room._id}`}>
               <RoomStatus status={room.status}>
                  {room.status ? "Available" : "Booked"}
               </RoomStatus>
            </Link>
         </Td>
         <Td>
            <Link to={`/room/edit/${room._id}`}>
               <BiDotsVerticalRounded className="dots" />
            </Link>
         </Td>
      </ListCard>
   );
};

export default RoomCard;
