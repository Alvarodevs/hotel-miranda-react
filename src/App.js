import './styles/global/App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ContactView, Dashboard, NotFound, GuestView, GuestsView, ConciergeView } from './views';
import MenuDashboard from './components/MenuDashboard';
import HeaderDashboard from './components/HeaderDashboard';
import MainContainer from './components/MainContainer';
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
				<MenuDashboard />
				<HeaderDashboard />
				<MainContainer>
					<Routes>
						<Route path='/login' element={<Login setAuth={setAuth} />} />
						{/* PROTECTED ROUTES */}

						<Route element={<PrivateRoutes auth={auth} />} >

							<Route path='/' element={<Navigate to="/dashboard" replace />} />
							<Route path='/dashboard' element={<Dashboard />} />

							<Route path='/bookings' element={<BookingList />} />
							<Route path='/booking/:id' element={<Booking />} />
							<Route path='/booking' element={<Navigate to="/bookings" replace />} />
							<Route path='/bookings/:id' element={<Navigate to="/bookings" replace />} />
							<Route path='/booking/edit/:id' element={<Booking />} />

							<Route path='/rooms' element={<RoomList />} />
							<Route path='/room/:id' element={<Room />} />
							<Route path='/room' element={<Navigate to="/rooms" replace />} />
							<Route path='/rooms/:id' element={<Navigate to="/rooms" replace />} />
							<Route path='/room/edit/:id' element={<Room />} />

							<Route path='/users' element={<UserList />} />
							<Route path='/user/:id' element={<User />} />
							<Route path='/user' element={<Navigate to="/users" replace />} />
							<Route path='/users/:id' element={<Navigate to="/users" replace />} />
							<Route path='/user/edit/:id' element={<User />} />

							<Route path='/guests' element={<GuestsView />} />
							<Route path='/guest/:id' element={<GuestView />} />
							<Route path='/guest' element={<Navigate to="/guests" replace />} />
							<Route path='/guests/:id' element={<Navigate to="/guests" replace />} />
							<Route path='/guest/edit/:id' element={<GuestView />} />

							<Route path='/concierge' element={<ConciergeView />} />

							<Route path='/contact' element={<ContactView />} />
						</Route>
						<Route path='/error_404' element={<NotFound />} />
						<Route path='/*' element={<Navigate to="/error_404" replace />} />
					</Routes>
				</MainContainer>
			</BrowserRouter>
		</div>
	);
}

export default App;
