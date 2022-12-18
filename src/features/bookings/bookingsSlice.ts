import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchData from "../fetchData";
import type { RootState } from '../../app/store'
import { IBooking } from "../../interfaces/IBooking";
import { IActionThunk } from "../../interfaces/IActionThunks";

interface BookingsState {
	items: IBooking[] | [],
	single: IBooking,
	status: string
}

export const getBookings = createAsyncThunk('fetch/bookings',
	async () => {
		const response = await fetchData('bookings')
		return response
	}
);

export const getBooking = createAsyncThunk("booking/fetchBooking",
	async (id) => {
		const response = await fetchData('bookings')
		const result = response.filter(booking => booking.id === id)
		return result
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
      id: "7035706674",
      photo: "http://dummyimage.com/347x337.png/dddddd/000000",
      guest_name: "Reinaldos Derington",
      order_date: "2021-11-10 05:10:44",
      check_in: "2021-09-09 17:47:08",
      check_out: "2021-08-28 07:52:20",
      request: "Toxic effect of hydrogen cyanide, undetermined, init encntr",
      room_type: "Single",
      status: "Check in",
      price: "€523,87",
      amenities: "LED tv, bath, late-checkout, sea view, city tour",
      room_desc:
         "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
   },
   status: "idle",
};

export const bookingsSlice = createSlice({
	name: 'bookings',
	initialState,
	reducers: {

	},

	extraReducers: (builder) => {
		builder
         .addCase(getBookings.pending, (state: BookingsState) => {
            state.status = "loading";
         })
         .addCase(getBookings.fulfilled, (state: BookingsState, action: IActionThunk) => {
               state.items = action.payload;
               state.status = "ok";
            }
         )
         .addCase(getBookings.rejected, (state: BookingsState) => {
            state.status = "ko";
         })

         .addCase(
            getBooking.fulfilled, (state: BookingsState, action: IActionThunk) => {
               state.single = action.payload[0];
               state.status = "ok";
            }
         );

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
	}
})

// export const { filterByStatus, resetState } = bookingsSlice.actions;

export const selectBookings = (state: RootState) => state.bookings.items;
export const selectBooking = (state: RootState) => state.bookings.single;
export const selectStatus = (state: RootState) => state.bookings.status;

export default bookingsSlice.reducer;