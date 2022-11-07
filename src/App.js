import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Booking, Bookings, Contact, Dashboard, Login, NotFound, Room, Rooms, User, Users } from './views';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}>Login</Route>
          <Route path='/' element={<Dashboard/>}>Dashboard</Route>

          <Route path='/bookings' element={<Bookings/>}>Bookings</Route>
          <Route path='/booking/:id' element={<Booking/>}>Booking id:</Route>
          <Route path='/booking/edit/:id' element={<Booking />}>Booking edit id:</Route>

          <Route path='/rooms' element={<Rooms/>}>Rooms </Route>
          <Route path='/room/:id' element={<Room/>}>Room id:</Route>
          <Route path='/room/edit/:id' element={<Room/>}>Room edit id:</Route>

          <Route path='/users' element={<Users/>}>Users </Route>
          <Route path='/user/:id' element={<User/>}>User id:</Route>
          <Route path='/user/edit/:id' element={<User/>}>User edit id:</Route>

          <Route path='/contact' element={<Contact/>}>Contact</Route>

          <Route path='*' element={<NotFound/>}>404 Not found</Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
