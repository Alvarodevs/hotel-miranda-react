import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRoom, editRoom } from "../../features/rooms/roomsSlice";
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
import { useParams } from "react-router";

const RoomForm = ({ room }) => {
   //const [imageLoaded, setImageLoaded] = useState(null);
   const [isOffer, setIsOffer] = useState(room ? room.offer : false);
   const [roomObject, setRoomObject] = useState({});
   const dispatch = useDispatch();
   const {id} = useParams();

   const handleToggle = () => setIsOffer(!isOffer);

   useEffect(() => {
      setRoomObject({
         _id: room ? room._id : null,
         images: room ? room.images : "",
         bed_type: room ? room.bed_type : "",
         room_number: room ? room.room_number : 100,
         description: room
            ? room.description
            : "Enter your room description here.",
         price: room ? room.price / 1000 : 0,
         offer: room ? isOffer : false,
         offer_price: room ? room.offer_price : 0,
         cancellation: room
            ? room.cancellation
            : "Cancellation policy here please.",
         facilities: room
            ? room.facilities?.replaceAll(",", ", ").replaceAll("_", " ")
            : "TV, Bathtub, Sea_view, Late_checkout, City_tour",
         status: room ? room.status : true,
      });
   }, [room, isOffer]);
   
   // const imageHandler = (e) => {
   //    e.preventDefault();
   //    const fd = new FormData();
   //    fd.append("image", e.target.files[0], e.target.files[0].name);
   //    return setImageLoaded(fd);
   // };

   // const handleUpload = (e) => {
   //    return setRoomObject({
   //       ...roomObject,
   //       images: imageLoaded,
   //    });
   // };

   const handleSubmit = (e) => {
      e.preventDefault();
      room
         ? dispatch(editRoom(id, { room: roomObject }))
         : dispatch(addRoom({ room: roomObject }));
      return setRoomObject({
         _id: null,
         images: null,
         bed_type: null,
         room_number: 100,
         description: "Enter your room description here.",
         price: 0,
         offer: false,
         offer_price: 0,
         cancellation: "Cancellation policy here please.",
      });
   };
   console.log(roomObject);

   return (
      <MainContainer>
         <Title>Room Form</Title>
         <Form action="" onSubmit={handleSubmit}>
            <Container>
               <Label htmlFor="load-images">
                  Select images (max. 5 images) :
               </Label>
               <Input
                  name="load-images"
                  type="text"
                  placeholder="Copy url image here"
                  value={roomObject.images ? roomObject.images : ""}
                  style={{ width: "50%" }}
                  onChange={(e) =>
                     setRoomObject({ ...roomObject, images: e.target.value })
                  }
               ></Input>
               {/* <Input
                  name="load-images"
                  type="file"
                  style={{ width: "32%" }}
                  onChange={imageHandler}
               /> */}
               {/* <ClearButton onClick={handleUpload}>Upload</ClearButton> */}
               {/* ICON TO DELETE ITEM */}
            </Container>
            <Container>
               <Label>Select bed type : </Label>
               <Select
                  defaultValue={roomObject.bed_type ? roomObject.bed_type : ""}
                  onChange={(e) =>
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
                  onChange={(e) =>
                     setRoomObject({
                        ...roomObject,
                        room_number: e.target.value,
                     })
                  }
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
                  value={roomObject.description ? roomObject.description : ""}
                  onChange={(e) =>
                     setRoomObject({
                        ...roomObject,
                        description: e.target.value,
                     })
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
                     onChange={(e) =>
                        setRoomObject({ ...roomObject, price: e.target.value })
                     }
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
                  onChange={(e) =>
                     setRoomObject({ ...roomObject, offer: isOffer })
                  }
               />
            </Container>
            <Container>
               <Label htmlFor="offer-percentage">Room offer percentage :</Label>
               <Input
                  name="offer-percentage"
                  type="number"
                  max={100}
                  value={isOffer ? roomObject.offer_price : 0}
                  onChange={(e) =>
                     setRoomObject({
                        ...roomObject,
                        offer_price: e.target.value,
                     })
                  }
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
                  onChange={(e) =>
                     setRoomObject({
                        ...roomObject,
                        facilities: e.target.value,
                     })
                  }
               />
            </Container>
            <Container>
               <Label htmlFor="cancellation">Room cancellation policy :</Label>
               <Input
                  name="cancellation"
                  type="text"
                  style={{ width: "600px", textAlign: "left" }}
                  value={roomObject.cancellation ? roomObject.cancellation : ""}
                  onChange={(e) =>
                     setRoomObject({
                        ...roomObject,
                        cancellation: e.target.value,
                     })
                  }
               />
            </Container>
            <ButtonContainer>
               <SaveButton onSubmit={handleSubmit}>Save</SaveButton>
               <ClearButton type="submit">Clear</ClearButton>
               {/* {room ? <DeleteButton onClick={() => deleteItem()}>Delete</DeleteButton> : null} */}
            </ButtonContainer>
         </Form>
      </MainContainer>
   );
};

export default RoomForm;
