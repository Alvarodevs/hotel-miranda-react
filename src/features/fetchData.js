import rooms from '../db/rooms.json'
import bookings from '../db/bookings.json'
import users from '../db/users.json'
import { fakeDelayPromise } from '../utils/helpers'

const fetchData = (db) => {
	switch (db) {
		case 'rooms':
			return fakeDelayPromise(rooms);
		case 'bookings':
			return fakeDelayPromise(bookings);
		case 'users':
			return fakeDelayPromise(users);
		default: return
	}
}
export default fetchData;
