import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import MainContainer from "../MainContainer";
import { selectRooms, getRooms } from "../../features/rooms/roomsSlice";

const RoomForm = () => {
   const [roomObject, setRoomObject] = useState({
      id: 0,
      images: [],
      bed_type: "",
      room_number: 0,
      description: "Enter your room description here.",
      price: 0,
      offer: 0,
      offer_price: 0,
      cancellation: "Cancellation policy here please.",
      facilities: {
         TV: true,
         Bathtub: true,
         Sea_view: true,
         Late_checkout: true,
         City_tour: true,
      },
      status: true,
   });
   const { id } = useParams();
   const roomsRedux = useSelector(selectRooms);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getRooms());
      setRoomObject(
         id
            ? { ...roomObject, id: id }
            : { ...roomObject, id: parseInt(roomsRedux.length) + 1 }
      );
   }, []);

   console.log(roomObject);
   return (
      <div>
         <h1>Room Form</h1>
         <form
            action=""
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
         >
            <div>Images loader</div>
            <select
               onSelect={() =>
                  setRoomObject({ ...roomObject, bed_type_: "Single" })
               }
            >
               <option>Select bed type</option>
               <option value="Single">Single</option>
               <option value="Double">Double</option>
               <option value="Double Superior">Double Superior</option>
               <option value="Suite">Suite</option>
            </select>
            <label htmlFor="roomNumber">Room number</label>
            <input
               name="roomNumber"
               type="number"
               min={100}
               defaultValue={100}
            />
            <label htmlFor="description">
               Enter room description max. 100 characters
            </label>
            <input name="description" type="text" maxLength={100} />
            <label htmlFor="price">Room rate</label>
            <input name="price" type="number" />
            <label htmlFor="offer">Room is on offer</label>
            <input name="offer" type="checkbox" />
            <label htmlFor="offer-percentage">Room offer percentage</label>
            <input name="offer-percentage" type="number" />
            <label htmlFor="cancellation">Room cancellation policy</label>
            <input name="cancellation" type="text" />
            <div>
               <button type="submit">Save</button>
               <button type="submit">Clear</button>
            </div>
         </form>
      </div>
   );
};

const RoomEditor = () => {
   const { pathname } = useLocation();

   const isCreator = pathname.includes("/add") ? true : false;

   const renderContainer = () => {
      if (isCreator) {
         return (
            <div>
               <RoomForm />
            </div>
         );
      } else
         return (
            <MainContainer>
               <RoomForm />
            </MainContainer>
         );
   };

   return renderContainer();
};

export default RoomEditor;
