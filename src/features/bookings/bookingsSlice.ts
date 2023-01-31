import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchApi from "../fetchApi";
import type { RootState } from "../../app/store";
import { IBooking, IActionThunk } from "../../interfaces";

interface BookingsState {
   items: IBooking[] | [];
   single: IBooking;
   status: string;
}


export const getBookings = createAsyncThunk("fetch/bookings", async () => {
   const response = await fetchApi(`bookings`, "GET");
   return response;
});

export const getBooking = createAsyncThunk(
   "booking/fetchBooking",
   async (id) => {
      const bookingData = await fetchApi(`bookings/${id}`, "GET");
      const roomId = bookingData.room_id;
      const roomData = await fetchApi(`rooms/${roomId}`, "GET");
      return { response: bookingData, roomImages: roomData.images };
   }
);

// export const addBooking = createAsyncThunk("booking/addBooking",
// 	async (newBooking) => {
// 		return await newBooking;
// 	}
// );

// export const deleteBooking = createAsyncThunk("booking/deleteBooking",
// 	async (id) => {
// 		return await id;
// 	}
// );

// export const editBooking = createAsyncThunk("booking/editBooking",
// 	async (id) => {
// 		return await id;
// 	}
// );

const initialState: BookingsState = {
   items: [],
   single: {
      _id: "",
      photo: "",
      guest_name: "",
      order_date: "",
      check_in: "",
      check_out: "",
      request: "",
      room_type: "",
      status: "",
      price: "",
      amenities: "",
      room_desc: "",
      room_id: "",
      user_id: "",
   },
   status: "idle",
};

export const bookingsSlice = createSlice({
   name: "bookings",
   initialState,
   reducers: {
      sortNewest: (state: BookingsState) => {
         state.items.sort((a, b) => {
            return a.order_date > b.order_date? -1 : 1;
         })
      },

   },

   extraReducers: (builder) => {
      builder
         //GET all bookings
         .addCase(getBookings.pending, (state: BookingsState) => {
            state.status = "loading";
         })
         .addCase(
            getBookings.fulfilled,
            (state: BookingsState, action: IActionThunk) => {
               state.items = action.payload;
               state.status = "ok";
            }
         )
         .addCase(getBookings.rejected, (state: BookingsState) => {
            state.status = "ko";
         })

         //GET single booking
         .addCase(getBooking.pending, (state: BookingsState) => {
            state.status = "loading";
         })
         .addCase(
            getBooking.fulfilled,
            (state: BookingsState, action: IActionThunk) => {
               state.single = {
                  ...action.payload.response,
                  room_images: action.payload.roomImages,
               };
               state.status = "ok";
            }
         )
         .addCase(getBooking.rejected, (state: BookingsState) => {
            state.status = "ko";
         });

      // .addCase(addBooking.fulfilled, (state, action) => {
      // 	state.items = [...state.items, action.payload];
      // 	state.status = 'ok';
      // })

      // .addCase(deleteBooking.fulfilled, (state, action) => {
      // 	state.items = state.items.filter(
      // 		(booking) => booking.id !== action.payload
      // 	);
      // 	state.status = 'ok';
      // })

      // .addCase(editBooking.fulfilled, (state, action) => {
      // 	state.status = 'ok';
      // 	state.items = state.items.map((booking) => {
      // 		return booking.id === action.payload.id ? action.payload : booking;
      // 	});
      // })
   },
});

export const { sortNewest } = bookingsSlice.actions;

export const selectBookings = (state: RootState) => state.bookings.items;
export const selectBooking = (state: RootState) => state.bookings.single;
export const selectStatus = (state: RootState) => state.bookings.status;

export default bookingsSlice.reducer;
