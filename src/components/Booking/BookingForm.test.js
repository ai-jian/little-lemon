import { render, screen } from '@testing-library/react'
import BookingForm from './BookingForm'

describe('BookingForm', () => {

    test('Renders the Booking Form', () => {
        const availableTimes = ['11:30']
        render(<BookingForm availableTimes={availableTimes} />);
        const headingElement = screen.getByText('Book a Table')
        expect(headingElement).toBeInTheDocument()
    })
})