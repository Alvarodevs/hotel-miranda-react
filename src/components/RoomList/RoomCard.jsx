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
} from "../../styles/Table";
import roomImg from "../../assets/images/room.jpg";
import { RoomStatus } from "./RoomListStyled";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";

const RoomCard = ({room}) => {

   return (
            <ListCard key={room.id}>
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
   );
};

export default RoomCard;
