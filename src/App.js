import './styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BookingView, BookingsView, ContactView, Dashboard, LoginView, NotFound, RoomView, RoomsView, UserView, UsersView } from './views';
import PrivateRoutes from './utils/PrivateRoutes';
import MenuDashboard from './components/MenuDashboard';
import HeaderDashboard from './components/HeaderDashboard';
import MainContainer from './components/MainContainer';


function App() {

	return (
		<div>
			<BrowserRouter>
				<MenuDashboard />
				<HeaderDashboard />
				<MainContainer>
					<Routes>
						<Route exact path='/login' element={<LoginView />} />
						{/* PROTECTED ROUTES */}
						<Route element={<PrivateRoutes />} >
							<Route exact path='/' element={<Dashboard />} />

							<Route exact path='/bookings' element={<BookingsView />} />
							<Route exact path='/booking/:id' element={<BookingView />} />
							<Route exact path='/booking' element={<Navigate to="/bookings" replace />} />
							<Route exact path='/bookings/:id' element={<Navigate to="/bookings" replace />} />
							<Route exact path='/booking/edit/:id' element={<BookingView />} />

							<Route exact path='/rooms' element={<RoomsView />} />
							<Route exact path='/room/:id' element={<RoomView />} />
							<Route exact path='/room' element={<Navigate to="/rooms" replace />} />
							<Route exact path='/rooms/:id' element={<Navigate to="/rooms" replace />} />
							<Route exact path='/room/edit/:id' element={<RoomView />} />

							<Route exact path='/users' element={<UsersView />} />
							<Route exact path='/user/:id' element={<UserView />} />
							<Route exact path='/user' element={<Navigate to="/users" replace />} />
							<Route exact path='/users/:id' element={<Navigate to="/users" replace />} />
							<Route exact path='/user/edit/:id' element={<UserView />} />

							<Route exact path='/contact' element={<ContactView />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</MainContainer>
			</BrowserRouter>
		</div>
	);
}

export default App;
