import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from '../features/bookings/bookingsSlice';
import usersReducer from '../features/users/usersSlice';
import roomsReducer from '../features/rooms/roomsSlice';
import contactReducer from '../features/contact/contactSlice';


export const store = configureStore({
	reducer: {
		bookings: bookingsReducer,
		users: usersReducer,
		rooms: roomsReducer,
		contact: contactReducer,
	},
});