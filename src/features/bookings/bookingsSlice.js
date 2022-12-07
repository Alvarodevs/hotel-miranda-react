import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../fetchData";

export const getBookings = createAsyncThunk('fetch/bookings',
	async () => {
		const response = await fetchData('bookings')
		return response
	}
);

export const getBooking = createAsyncThunk("booking/fetchBooking",
	async (id) => {
		const response = await fetchData('bookings')
		return response.filter(booking => booking.id === id)
		//return await id
	}
);

export const addBooking = createAsyncThunk("booking/addBooking",
	async (newBooking) => {
		return await newBooking;
	}
);

export const deleteBooking = createAsyncThunk("booking/deleteBooking",
	async (id) => {
		return await id;
	}
);

export const editBooking = createAsyncThunk("booking/editBooking",
	async (id) => {
		return await id;
	}
);

const initialState = {
	items: [],
	single: {},
	status: 'idle',
}

export const bookingsSlice = createSlice({
	name: 'bookings',
	initialState,
	reducers: {

	},

	extraReducers: (builder) => {
		builder
			.addCase(getBookings.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getBookings.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'ok';
			})
			.addCase(getBookings.rejected, (state) => {
				state.status = 'ko';
			})

			.addCase(getBooking.fulfilled, (state, action) => {
				//console.log('ACTION', action.payload);
				//state.single = state.items.filter(item => item.id === action.payload);
				state.single = action.payload[0];
				state.status = 'ok';
			})

			.addCase(addBooking.fulfilled, (state, action) => {
				state.items = [...state.items, action.payload];
				state.status = 'ok';
			})

			.addCase(deleteBooking.fulfilled, (state, action) => {
				state.items = state.items.filter(
					(booking) => booking.id !== action.payload
				);
				state.status = 'ok';
			})

			.addCase(editBooking.fulfilled, (state, action) => {
				state.status = 'ok';
				state.items = state.items.map((booking) => {
					return booking.id === action.payload.id ? action.payload : booking;
				});
			})
	}
})

export const { filterByStatus, resetState } = bookingsSlice.actions;

export const selectBookings = (state) => state.bookings.items;
export const selectBooking = (state) => state.bookings.single;
export const selectStatus = (state) => state.bookings.status;

export default bookingsSlice.reducer;