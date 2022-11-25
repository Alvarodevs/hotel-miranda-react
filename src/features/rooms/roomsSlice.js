import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../fetchData";

export const getRooms = createAsyncThunk('fetch/rooms',
	async () => {
		const response = await fetchData('rooms')
		return response
	}
);

const initialState = {
	items: [],
	single: {},
	status: 'idle',
}

export const roomsSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {
		filterByStatus: (state, action) => {
			state.status = 'loading';
			state.rooms = state.rooms.filter((room) => (
				room.status === action.payload
			));
			state.status = 'ok';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRooms.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getRooms.fulfilled, (state, action) => {
				state.status = 'loading';
				state.items = action.payload;
				state.status = 'ok';
			})
			.addCase(getRooms.rejected, (state) => {
				state.status = 'ko';
				console.log('No rooms loaded')
			})
	}
})

export const { filterByStatus, resetState } = roomsSlice.actions;

export const selectRooms = (state) => state.rooms.items;
export const selectRoom = (state) => state.rooms.single;
export const selectStatus = (state) => state.rooms.status;

export default roomsSlice.reducer;