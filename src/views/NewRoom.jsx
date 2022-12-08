import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MainContainer from "../components/MainContainer";
import { selectRooms, getRooms } from "../features/rooms/roomsSlice";
import {Title,
Form,
Container,
Label,
Input,
Select,
Checkbox,
ButtonContainer,
SaveButton,
ClearButton} from '../styles/views/NewRoomStyled';

const NewRoom = () => {
   const [imageLoaded, setImageLoaded] = useState(null)
	const [value, setValue] = useState("default");
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

	const imageHandler = (e) => {
		return setRoomObject({...roomObject, images: [...roomObject.images, imageLoaded]})
	}
   console.log(roomObject.images);
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
            </Container>
            <Container>
               <Label>Select bed type : </Label>
               <Select
                  defaultValue={value}
                  onSelect={() =>
                     setRoomObject({ ...roomObject, bed_type: "Single" })
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
                  min={100}
                  defaultValue={100}
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
                  style={{ width: "600px", textAlign: "left", paddingLeft: "10px" }}
               />
            </Container>
            <Container>
               <Label htmlFor="price">Room rate : </Label>
               <div>
                  € <Input name="price" type="number" />
               </div>
            </Container>
            <Container>
               <Label htmlFor="offer">Room is on offer :</Label>
               <Checkbox name="offer" type="checkbox" />
            </Container>
            <Container>
               <Label htmlFor="offer-percentage">Room offer percentage :</Label>
               <Input name="offer-percentage" type="number" />
            </Container>
            <Container>
               <Label htmlFor="cancellation">Room cancellation policy :</Label>
               <Input
                  name="cancellation"
                  type="text"
                  style={{ width: "600px", textAlign: "left" }}
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

export default NewRoom;
