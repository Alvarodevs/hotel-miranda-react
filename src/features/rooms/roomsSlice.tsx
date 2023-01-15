import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchApi from "../fetchApi";
import IRoom from "../../interfaces/IRoom";
import IActionThunk from "../../interfaces/IActionThunk";

interface RoomState {
   items: IRoom[] | [];
   single: IRoom;
   status: string;
}

export const getRooms = createAsyncThunk("fetch/bookings", async () => {
   const response = await fetchApi(`rooms`, "GET");
   return response;
});

export const getRoom = createAsyncThunk("room/fetchRoom", async (id) => {
   const response = await fetchApi(`rooms/${id}`, "GET");
   return await response;
});

// export const addRoom = createAsyncThunk("room/addRoom",
// 	async (newRoom) => {
// 		return await newRoom;
// 	}
// );

// export const deleteRoom = createAsyncThunk("room/deleteRoom",
// 	async (id) => {
// 		return await id;
// 	}
// );

// export const editRoom = createAsyncThunk("room/editRoom",
// 	async (id) => {
// 		return await id;
// 	}
// );

const initialState: RoomState = {
   items: [],
   single: {
      _id: "",
      images: "",
      bed_type: "",
      room_number: 0,
      description: "",
      price: 0,
      offer: false,
      offer_price: 0,
      cancellation: "",
      facilities: "",
      status: false,
   },
   status: "idle",
};

export const roomsSlice = createSlice({
   name: "rooms",
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         //GET all rooms
         .addCase(getRooms.pending, (state: RoomState) => {
            state.status = "loading";
         })
         .addCase(
            getRooms.fulfilled,
            (state: RoomState, action: IActionThunk) => {
               state.items = action.payload;
               state.status = "ok";
            }
         )
         .addCase(getRooms.rejected, (state: RoomState) => {
            state.status = "ko";
         })

         //GET single room
         .addCase(getRoom.pending, (state: RoomState) => {
            state.status = "loading";
         })

         .addCase(
            getRoom.fulfilled,
            (state: RoomState, action: IActionThunk) => {
               state.single = action.payload;
               state.status = "ok";
            }
         )
         .addCase(getRoom.rejected, (state: RoomState) => {
            state.status = "ko";
         });

      // .addCase(addRoom.fulfilled, (state: RoomState, action: IActionThunk) => {
      // 	state.items = [...state.items, action.payload];
      // 	state.status = 'ok';
      // })

      // .addCase(deleteRoom.fulfilled, (state: RoomState, action: IActionThunk) => {
      // 	state.items = state.items.filter(
      // 		(room) => room.id !== action.payload
      // 	);
      // 	state.status = 'ok';
      // })

      // .addCase(editRoom.fulfilled, (state: RoomState, action: IActionThunk) => {
      // 	state.status = 'ok';
      // 	state.items = state.items.map((room) => {
      // 		return room.id === action.payload.id ? action.payload : room;
      // 	});
      // })
   },
});

//export const { filterByStatus, resetState } = roomsSlice.actions;

export const selectRooms = (state) => state.rooms.items;
export const selectRoom = (state) => state.rooms.single;
export const selectStatus = (state) => state.rooms.status;

export default roomsSlice.reducer;
