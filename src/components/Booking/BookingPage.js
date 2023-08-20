import './Booking.css'
import React from 'react'
import BookingForm from './BookingForm'


export default function BookingPage({ availableTimes, dispatch }) {
    return (
        <div className='booking-page'>
            <h2>Book Now</h2>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    )
}
