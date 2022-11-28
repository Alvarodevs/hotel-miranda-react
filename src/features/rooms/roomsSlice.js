import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../fetchData";

export const getRooms = createAsyncThunk('fetch/rooms',
	async () => {
		const response = await fetchData('rooms')
		return response
	}
);

export const addRoom = createAsyncThunk("room/addRoom",
	async (newRoom) => {
		return await newRoom;
	}
);

export const deleteRoom = createAsyncThunk("room/deleteRoom",
	async (id) => {
		return await id;
	}
);

export const editRoom = createAsyncThunk("room/editRoom",
	async (id) => {
		return await id;
	}
);

export const getRoom = createAsyncThunk("room/fetchRoom",
	async (id) => {
		return await id;
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

	},

	extraReducers: (builder) => {
		builder
			.addCase(getRooms.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getRooms.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'ok';
			})
			.addCase(getRooms.rejected, (state) => {
				state.status = 'ko';
			})

			.addCase(addRoom.fulfilled, (state, action) => {
				state.items = [...state.items, action.payload];
				state.status = 'ok';
			})

			.addCase(deleteRoom.fulfilled, (state, action) => {
				state.items = state.items.filter(
					(room) => room.id !== action.payload
				);
				state.status = 'ok';
			})

			.addCase(editRoom.fulfilled, (state, action) => {
				state.status = 'ok';
				state.items = state.items.map((room) => {
					return room.id === action.payload.id ? action.payload : room;
				});
			})

			.addCase(getRoom.fulfilled, (state, action) => {
				state.single = state.items.find((room) => room.id === action.payload);
				state.status = 'ok';
			})


	}
})

//export const { filterByStatus, resetState } = roomsSlice.actions;

export const selectRooms = (state) => state.rooms.items;
export const selectRoom = (state) => state.rooms.single;
export const selectStatus = (state) => state.rooms.status;

export default roomsSlice.reducer;