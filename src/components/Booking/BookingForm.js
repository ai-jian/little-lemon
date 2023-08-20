import React, { useState } from 'react'
import FormField from './FormField';

export default function BookingForm({ availableTimes, dispatch }) {

    const minGuests = 1
    const maxGuests = 10

    const today = new Date().toISOString().substring(0, 10)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1); // Add one month
    const maxDateString = maxDate.toISOString().substring(0, 10);

    const defaultTime = availableTimes[0]

    const occasions = ['Birthday', 'Anniversary', 'Engagement',]

    const guestsErrorMessage = 'Please enter a valid guests number between 1 and 10'
    const dateErrorMessage = 'Please choose a valid date.'
    const timeErrorMessage = 'Please choose a valid time.'

    const [guests, setGuests] = useState('2')
    const [date, setDate] = useState(today)
    const [time, setTime] = useState(defaultTime)
    const [occasion, setOccasion] = useState('')

    const isGuestsValid = () => guests !== '' && guests > minGuests && guests < maxGuests
    const isDateValid = () => date !== ''
    const isTimeValid = () => time !== ''
    const isOccasionValid = () => occasion !== ''

    console.log(availableTimes)

    const clearForm = () => {
        setGuests('2')
        setDate(today)
        setTime(defaultTime)
        setOccasion('')
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
        dispatch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Rervation Submitted!")
        console.log(guests, date, time, occasion)
        clearForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormField
                htmlFor={"guests"}
                label={"Number of guests"}
                hasError={!isGuestsValid()}
                errorMessage={guestsErrorMessage}
            >
                <input
                    type="number"
                    id='guests'
                    name='guests'
                    min={minGuests}
                    max={maxGuests}
                    value={guests}
                    onChange={(e) => { setGuests(e.target.value) }}
                    required
                />
            </FormField>

            <FormField
                htmlFor={'date'}
                label={"Date of reservation"}
                hasError={!isDateValid()}
                errorMessage={dateErrorMessage}
            >
                <input
                    type="date"
                    id='date'
                    value={date}
                    min={today}
                    max={maxDateString}
                    onChange={handleDateChange}
                    required
                />
            </FormField>

            <FormField
                htmlFor={"time"}
                label={"Time of reservation"}
                hasError={!isTimeValid()}
                errorMessage={timeErrorMessage}
            >
                <select
                    name="time"
                    id="time"
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    {/* <option defaultValue={''}>--- Please select a time ---</option> */}
                    {availableTimes.map(slot =>
                        <option key={(slot)}>
                            {slot}
                        </option>
                    )}
                </select>
            </FormField>

            <FormField
                htmlFor={"occasion"}
                label={"Occasion"}
            >
                <select
                    name="occasin"
                    id="occasin"
                    value={occasion}
                    onChange={e => { setOccasion(e.target.value) }}
                >
                    <option defaultValue={''}>--- Optional ---</option>
                    {occasions.map((occasion) => (
                        <option key={occasion}>{occasion}</option>
                    ))}
                </select>
            </FormField>


            <button type='submit' >Book a Table</button>

        </form>
    )
}
