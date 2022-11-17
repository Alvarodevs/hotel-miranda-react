import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BookingStatus } from '../components/BookingList/BookingListStyled'

describe('Booking status', () => {
	test('is colored green when booked', () => {
		render(BookingStatus(status="Booked"))
		//const bookingSt = BookingStatus(state="Booked").type.styledComponentId;
		//console.log(bookingSt);
	})
})