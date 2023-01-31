import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchApi from "../fetchApi";
import IUser from "../../interfaces/IUser";
import IActionThunk from "../../interfaces/IActionThunk";

interface UserState {
   items: IUser[] | [];
   single: IUser;
   status: string;
}

export const getUsers = createAsyncThunk("fetch/users", async () => {
   const response = await fetchApi("users", "GET");
   return response;
});

export const getUser = createAsyncThunk("user/fetchUser", async (id) => {
   const response = await fetchApi(`users/${id}`, "GET");
   return await response;
});

// export const addUser = createAsyncThunk("user/addUser",
// 	async (newUser) => {
// 		return await newUser;
// 	}
// );

// export const deleteUser = createAsyncThunk("user/deleteUser",
// 	async (id) => {
// 		return await id;
// 	}
// );

// export const editUser = createAsyncThunk("user/editUser",
// 	async (id) => {
// 		return await id;
// 	}
// );

const initialState = {
   items: [],
   single: {
      _id: "",
      image: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      date: "",
      job_desc: "",
      state: false,
	   },
   status: "idle",
};

export const usersSlice = createSlice({
   name: "users",
   initialState,
   reducers: {
		sortNewest: (state: UserState) => {
         state.items.sort((a, b) => {
            return a.date > b.date ? -1 : 1;
         })
      },
	},

   extraReducers: (builder) => {
      builder
			//GET ALL USERS
			.addCase(getUsers.pending, (state: UserState) => {
            state.status = "loading";
         })
         .addCase(getUsers.fulfilled, (state: UserState, action: IActionThunk) => {
            state.items = action.payload;
            state.status = "ok";
         })
         .addCase(getUsers.rejected, (state: UserState) => {
            state.status = "ko";
         })

         .addCase(getUser.pending, (state: UserState) => {
            state.status = "loading";
         })

         .addCase(getUser.fulfilled, (state: UserState, action: IActionThunk) => {
            state.single = action.payload;
            state.status = "ok";
         })

         // .addCase(addUser.fulfilled, (state: UserState, action: IActionThunk) => {
         //    state.items = [...state.items, action.payload];
         //    state.status = "ok";
         // })

         // .addCase(deleteUser.fulfilled, (state: UserState, action: IActionThunk) => {
         //    state.items = state.items.filter(
         //       (user) => user.id !== action.payload
         //    );
         //    state.status = "ok";
         // })

         // .addCase(editUser.fulfilled, (state: UserState, action: IActionThunk) => {
         //    state.status = "ok";
         //    state.items = state.items.map((user) => {
         //       return user.id === action.payload.id ? action.payload : user;
         //    });
         // })

         
   },
});

export const { sortNewest } = usersSlice.actions;

export const selectUsers = (state) => state.users.items;
export const selectUser = (state) => state.users.single;
export const selectStatus = (state) => state.users.status;

export default usersSlice.reducer;
