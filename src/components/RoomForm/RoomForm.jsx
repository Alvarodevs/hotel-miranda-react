import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import {
   Title,
   Form,
   Container,
   Label,
   Input,
   Select,
   Checkbox,
   ButtonContainer,
   SaveButton,
   ClearButton,
} from "./RoomFormStyled";

const RoomForm = ({ room }) => {
   const [imageLoaded, setImageLoaded] = useState(null);
   const [isOffer, setIsOffer] = useState(room.offer);
   const [roomObject, setRoomObject] = useState({
      id: 0,
      images: room.images ? room.images : [],
      bed_type: room.bed_type ? room.bed_type : "",
      room_number: room.room_number ? room.room_number : 100,
      description: room.description
         ? room.description
         : "Enter your room description here.",
      price: room.price ? room.price / 1000 : 0,
      offer: room.offer ? isOffer : false,
      offer_price: room.offer_price ? room.offer_price : 0,
      cancellation: room.cancellation
         ? room.cancellation
         : "Cancellation policy here please.",
      facilities: room.facilities
         ? room.facilities.replaceAll(",", ", ").replaceAll("_", " ")
         : "TV, Bathtub, Sea_view, Late_checkout, City_tour",
      status: room.status ? room.status : true,
   });

   //useEffect(() => {}, [room]);
   // console.log(
   //    images,
   //    bed_type,
   //    room_number,
   //    description,
   //    price,
   //    offer,
   //    offer_price,
   //    cancellation,
   //    facilities,
   //    status
   // );

   const handleToggle = () => setIsOffer(!isOffer);

   const imageHandler = (e) => {
      return setRoomObject({
         ...roomObject,
         images: [...roomObject.images, imageLoaded],
      });
   };
   console.log(roomObject);
   console.log(isOffer);
   return (
      <MainContainer>
         <Title>Room Form</Title>
         <Form action="">
            <Container>
               <Label htmlFor="load-images">
                  Select images (max. 5 images) :
               </Label>
               <Input
                  name="load-images"
                  type="file"
                  style={{ width: "32%" }}
                  onChange={(e) => setImageLoaded(e.target.files[0])}
               />
               <ClearButton onClick={imageHandler}>Upload</ClearButton>
               {/* ICON TO DELETE ITEM */}
            </Container>
            <Container>
               <Label>Select bed type : </Label>
               <Select
                  defaultValue={roomObject.bed_type ? roomObject.bed_type : ""}
                  onSelect={(e) =>
                     setRoomObject({ ...roomObject, bed_type: e.target.value })
                  }
               >
                  <option value="default" disabled hidden>
                     {" "}
                     Select bed type{" "}
                  </option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Double Superior">Double Superior</option>
                  <option value="Suite">Suite</option>
               </Select>
            </Container>
            <Container>
               <Label htmlFor="roomNumber">Room number :</Label>
               <Input
                  name="roomNumber"
                  type="number"
                  value={roomObject.room_number ? roomObject.room_number : 100}
                  min={100}
               />
            </Container>
            <Container>
               <Label htmlFor="description">
                  Room description (max. 100 characters) :
               </Label>
               <Input
                  name="description"
                  type="text"
                  maxLength={100}
                  style={{
                     width: "95%",
                     textAlign: "left",
                     paddingLeft: "10px",
                  }}
                  defaultValue={
                     roomObject.description ? roomObject.description : ""
                  }
               />
            </Container>
            <Container>
               <Label htmlFor="price">Room rate : </Label>
               <div>
                  €{" "}
                  <Input
                     name="price"
                     type="number"
                     min={0}
                     value={roomObject.price ? roomObject.price : 0}
                  />
               </div>
            </Container>
            <Container>
               <Label htmlFor="offer">Room is on offer :</Label>
               <Checkbox
                  name="offer"
                  type="checkbox"
                  checked={isOffer}
                  onClick={handleToggle}
               />
            </Container>
            <Container>
               <Label htmlFor="offer-percentage">Room offer percentage :</Label>
               <Input
                  name="offer-percentage"
                  type="number"
                  max={100}
                  value={isOffer ? roomObject.offer_price : 0}
               />
            </Container>
            <Container>
               <Label htmlFor="facilities">
                  Facilities (separate by commas):
               </Label>
               <Input
                  name="facilities"
                  type="text"
                  style={{ width: "600px", textAlign: "left" }}
                  value={roomObject.facilities ? roomObject.facilities : ""}
               />
            </Container>
            <Container>
               <Label htmlFor="cancellation">Room cancellation policy :</Label>
               <Input
                  name="cancellation"
                  type="text"
                  style={{ width: "600px", textAlign: "left" }}
                  value={roomObject.cancellation ? roomObject.cancellation : ""}
               />
            </Container>
            <ButtonContainer>
               <SaveButton type="submit">Save</SaveButton>
               <ClearButton type="submit">Clear</ClearButton>
            </ButtonContainer>
         </Form>
      </MainContainer>
   );
};

export default RoomForm;
