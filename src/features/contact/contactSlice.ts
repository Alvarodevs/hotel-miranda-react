import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchApi from "../fetchApi";
import type { RootState } from "../../app/store";
import { IContact, IActionThunk } from "../../interfaces";

interface ContactsState {
   items: IContact[] | [];
   single: IContact;
   status: string;
}

export const getContacts = createAsyncThunk("fetch/contacts", async () => {
   const response = await fetchApi(`contacts`, "GET");
   console.log(response)
   return response;
});

export const getContact = createAsyncThunk(
   "contact/fetchContact",
   async (id) => {
      const contactData = await fetchApi(`contacts/${id}`, "GET");
      return contactData;
   }
);

// export const addContact = createAsyncThunk("contact/addContact",
// 	async (newContact) => {
// 		return await newContact;
// 	}
// );

// export const deleteContact = createAsyncThunk("contact/deleteContact",
// 	async (id) => {
// 		return await id;
// 	}
// );

// export const editContact = createAsyncThunk("contact/editContact",
// 	async (id) => {
// 		return await id;
// 	}
// );

const initialState: ContactsState = {
   items: [],
   single: {
      _id: "",
      date: "",
      customer: "",
      email: "",
      phone: "",
      subject: "",
      comment: "",
      archived: false,
   },
   status: "idle",
};

export const contactsSlice = createSlice({
   name: "contacts",
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         //GET all contacts
         .addCase(getContacts.pending, (state: ContactsState) => {
            state.status = "loading";
         })
         .addCase(
            getContacts.fulfilled,
            (state: ContactsState, action: IActionThunk) => {
               state.items = action.payload;
               state.status = "ok";
            }
         )
         .addCase(getContacts.rejected, (state: ContactsState) => {
            state.status = "ko";
         })

         //GET single contact
         .addCase(getContact.pending, (state: ContactsState) => {
            state.status = "loading";
         })
         .addCase(
            getContact.fulfilled,
            (state: ContactsState, action: IActionThunk) => {
               state.single = action.payload;
               state.status = "ok";
            }
         )
         .addCase(getContact.rejected, (state: ContactsState) => {
            state.status = "ko";
         });

      // .addCase(addContact.fulfilled, (state, action) => {
      // 	state.items = [...state.items, action.payload];
      // 	state.status = 'ok';
      // })

      // .addCase(deleteContact.fulfilled, (state, action) => {
      // 	state.items = state.items.filter(
      // 		(contact) => contact.id !== action.payload
      // 	);
      // 	state.status = 'ok';
      // })

      // .addCase(editContact.fulfilled, (state, action) => {
      // 	state.status = 'ok';
      // 	state.items = state.items.map((contact) => {
      // 		return contact.id === action.payload.id ? action.payload : contact;
      // 	});
      // })
   },
});

// export const { filterByStatus, resetState } = contactsSlice.actions;

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectContact = (state: RootState) => state.contacts.single;
export const selectStatus = (state: RootState) => state.contacts.status;

export default contactsSlice.reducer;
