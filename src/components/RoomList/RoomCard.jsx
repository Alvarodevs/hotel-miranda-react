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
import {Link} from 'react-router-dom';

const RoomCard = ({room}) => {

   return (
      <ListCard key={room.id}>
         <Td>
            <Link to={`/room/${room.id}`}>
               <NameImg>
                  <Image src={roomImg} alt="Image" />
                  <Names>
                     <Id>#{room.id}</Id>
                     <Title>{room.room_number}</Title>
                  </Names>
               </NameImg>
            </Link>
         </Td>

         <TdTextWeight>
            <Link to={`/room/${room.id}`}>{room.bed_type}</Link>
         </TdTextWeight>
         <TdTextWeight>
            <Link to={`/room/${room.id}`}>
               {room.room_number.toString().charAt(0)}
            </Link>
         </TdTextWeight>
         <TdTextWeight>
            <Link to={`/room/${room.id}`}>
               {Object.entries(room.facilities).map((facility) =>
                  facility[1] ? <Span>{facility[0]}, </Span> : null
               )}
            </Link>
         </TdTextWeight>
         <TdTextWeight>
            <Link to={`/room/${room.id}`}>
               € {room.price.slice(0, -1)}
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
            <Link to={`/room/${room.id}`}>
               <RoomStatus status={room.status}>
                  {room.status ? "Available" : "Booked"}
               </RoomStatus>
            </Link>
         </Td>
         <Td>
            <BiDotsVerticalRounded className="dots" />
         </Td>
      </ListCard>
   );
};

export default RoomCard;
