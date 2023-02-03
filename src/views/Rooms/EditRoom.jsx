import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RoomForm from "../../components/RoomForm";
import { getRoom, selectRoom } from "../../features/rooms/roomsSlice";
import { useParams } from "react-router";

const EditRoom = () => {
   const dispatch = useDispatch();
   const room = useSelector(selectRoom);
   const { id } = useParams();

   useEffect(() => {
      dispatch(getRoom(id));
   }, [dispatch, id]);
   return (
      <div>
         <RoomForm room={room}></RoomForm>
      </div>
   );
};

export default EditRoom;
