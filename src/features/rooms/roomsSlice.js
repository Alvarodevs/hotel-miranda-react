import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../fetchData";

export const getRooms = createAsyncThunk('fetch/rooms',
	async () => {
		const response = await fetchData('rooms')
		return response
	} 
);

const initialState = {
	rooms: []
}

export const roomsSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {
		filterByStatus: (state, action) => {
			state.rooms = state.rooms.filter((room) => (
				room.status === action.payload
			))
		},
	}, 
	extraReducers: (builder) => {
		builder	
			.addCase(getRooms.fulfilled, (state, action) => {
				//console.log('ACTION EXTRARED', action)
				state.rooms = action.payload
			})
			.addCase(getRooms.rejected, () => {
				console.log('No rooms loaded')
			})
	}
})

export const { filterByStatus } = roomsSlice.actions;

export const selectRooms = (state) => state.rooms.rooms;

export default roomsSlice.reducer;