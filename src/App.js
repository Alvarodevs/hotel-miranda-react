import './styles/global/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BookingList, Booking, RoomsList, Room, Contacts, Dashboard, NotFound, NewRoom, NewUser } from './views';
import Login from './components/Login';
import UserList from './components/UserList';
import User from './components/User';
import { useReducer } from 'react';
import INIT_STATE from './store/initialState';
import loginReducer from './store/loginReducer';
import LoginContext from './store/LoginContext';
import PrivateRoutes from './utils/ProtectedRoutes';
import UserEditor from './components/User/UserEditor';

function App() {
	const store = useReducer(loginReducer, INIT_STATE)

	return (
		<div>
			<LoginContext.Provider value={store}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Routes>
						<Route path='/login' element={<Login />} />

						{/* PROTECTED ROUTES */}

						<Route element={<PrivateRoutes />} >

							<Route path='/' element={<Dashboard />} />
							{/* <Route path='/dashboard' element={<Dashboard />} /> */}

							<Route path='/bookings' element={<BookingList />} />
							<Route path='/booking/:id' element={<Booking />} />
							<Route path='/booking' element={<Navigate to="/bookings" replace />} />
							<Route path='/bookings/:id' element={<Navigate to="/bookings" replace />} />
							<Route path='/booking/edit/:id' element={<Booking />} />

							<Route path='/rooms' element={<RoomsList />} />
							<Route path='/room/:id' element={<Room />} />
							<Route path='/room' element={<Navigate to="/rooms" replace />} />
							<Route path='/rooms/:id' element={<Navigate to="/rooms" replace />} />
							<Route path='/add_room' element={<NewRoom />} />
							<Route path='/room/edit/:id' element={<NewRoom />} />

							<Route path='/users' element={<UserList />} />
							<Route path='/user/:id' element={<User />} />
							<Route path='/user' element={<Navigate to="/users" replace />} />
							<Route path='/users/:id' element={<Navigate to="/users" replace />} />
							<Route path='/add_user' element={<NewUser />} />
							<Route path='/user/edit/:id' element={<UserEditor />} />

							<Route path='/contacts' element={<Contacts />} />

						</Route>
						<Route path='/error_404' element={<NotFound />} />
						<Route path='*' element={<Navigate to="/error_404" replace />} />
					</Routes>
				</BrowserRouter>
			</LoginContext.Provider>
		</div>
	);
}

export default App;
