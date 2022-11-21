import './styles/global/App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ContactView, Dashboard, NotFound, GuestView, GuestsView, ConciergeView } from './views';
import RoomList from './components/RoomList';
import BookingList from './components/BookingList';
import Login from './components/Login';
import Room from './components/Room';
import Booking from './components/Booking';
import UserList from './components/UserList';
import User from './components/User';
import { useEffect, useState } from 'react';

function App() {
	const [auth, setAuth] = useState(localStorage.getItem("authenticated") !== null)

	//function check if auth to render components
	const PrivateRoutes = (props) => {
		return props.auth ? <Outlet /> : <Navigate to="/login" replace />
	}

	useEffect(() => {
		if (auth) {
			localStorage.setItem("authenticated", '1')
		} else {
			localStorage.removeItem("authenticated")
		}
	}, [auth])

	return (
		<div>
			<BrowserRouter>
				
					<Routes>
						<Route exact path='/login' element={<Login setAuth={setAuth} />} />
						{/* PROTECTED ROUTES */}

						<Route element={<PrivateRoutes auth={auth} />} >

							<Route exact path='/' element={<Navigate to="/dashboard" replace />} />
							<Route exact path='/dashboard' element={<Dashboard />} />

							<Route exact path='/bookings' element={<BookingList />} />
							<Route exact path='/booking/:id' element={<Booking />} />
							<Route exact path='/booking' element={<Navigate to="/bookings" replace />} />
							<Route exact path='/bookings/:id' element={<Navigate to="/bookings" replace />} />
							<Route exact path='/booking/edit/:id' element={<Booking />} />

							<Route exact path='/rooms' element={<RoomList />} />
							<Route exact path='/room/:id' element={<Room />} />
							<Route exact path='/room' element={<Navigate to="/rooms" replace />} />
							<Route exact path='/rooms/:id' element={<Navigate to="/rooms" replace />} />
							<Route exact path='/room/edit/:id' element={<Room />} />

							<Route exact path='/users' element={<UserList />} />
							<Route exact path='/user/:id' element={<User />} />
							<Route exact path='/user' element={<Navigate to="/users" replace />} />
							<Route exact path='/users/:id' element={<Navigate to="/users" replace />} />
							<Route exact path='/user/edit/:id' element={<User />} />

							<Route exact path='/guests' element={<GuestsView />} />
							<Route exact path='/guest/:id' element={<GuestView />} />
							<Route exact path='/guest' element={<Navigate to="/guests" replace />} />
							<Route exact path='/guests/:id' element={<Navigate to="/guests" replace />} />
							<Route exact path='/guest/edit/:id' element={<GuestView />} />

							<Route exact path='/concierge' element={<ConciergeView />} />

							<Route exact path='/contact' element={<ContactView />} />
						</Route>
						<Route path='/error_404' element={<NotFound />} />
						<Route path='*' element={<Navigate to="/error_404" replace />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
