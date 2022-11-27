import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchData from "../fetchData";

export const getUsers = createAsyncThunk('fetch/users',
	async () => {
		const response = await fetchData('users')
		return response
	}
);

export const addUser = createAsyncThunk("user/addUser",
	async (newUser) => {
		return await newUser;
	}
);

export const deleteUser = createAsyncThunk("user/deleteUser",
	async (id) => {
		return await id;
	}
);

export const editUser = createAsyncThunk("user/editUser",
	async (id) => {
		return await id;
	}
);

export const getUser = createAsyncThunk("user/fetchUser",
	async (id) => {
		return await id;
	}
);

const initialState = {
	items: [],
	single: {},
	status: 'idle',
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {

	},

	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = 'ok';
			})
			.addCase(getUsers.rejected, (state) => {
				state.status = 'ko';
			})

			.addCase(addUser.fulfilled, (state, action) => {
				state.items = [...state.items, action.payload];
				state.status = 'ok';
			})

			.addCase(deleteUser.fulfilled, (state, action) => {
				state.items = state.items.filter(
					(user) => user.id !== action.payload
				);
				state.status = 'ok';
			})

			.addCase(editUser.fulfilled, (state, action) => {
				state.status = 'ok';
				state.items = state.items.map((user) => {
					return user.id === action.payload.id ? action.payload : user;
				});
			})

			.addCase(getUser.fulfilled, (state, action) => {
				state.single = state.items.find((user) => user.id === action.payload);
				state.status = 'ok';
			})


	}
})

export const { filterByStatus, resetState } = usersSlice.actions;

export const selectUsers = (state) => state.users.items;
export const selectUser = (state) => state.users.single;
export const selectStatus = (state) => state.users.status;

export default usersSlice.reducer;