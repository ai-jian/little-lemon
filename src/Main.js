import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import BookingPage from './components/Booking/BookingPage'


const initialAvailableTimes = [
    '11:30 AM',
    '11:45 AM',
    '12:00 PM',
    '12:15 PM',
    '12:30 PM',
    '12:45 PM',
    '1:00 PM',
    '1:15 PM',
    '1:30 PM',
    '1:45 PM',

    '5:30 PM',
    '5:45 PM',
    '6:00 PM',
    '6:15 PM',
    '6:30 PM',
    '6:45 PM',
    '7:00 PM',
    '7:15 PM',
    '7:30 PM',
    '7:45 PM',
    '8:00 PM',
    '8:15 PM',
    '8:30 PM',
]


// const timesReducer = (state, action) => {
//     switch (action.type) {
//         case "UPDATE_TIMES":
//             // const response = fetchAPI(action.selecedDate)
//             // return response.length !== 0 ? response : state
//             return 
//         default:
//             throw new Error()
//     }
// }

export default function Main() {

    const updateTimes = (date) => {

        return date
    }

    const initializeTimes = () => {
        return initialAvailableTimes
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

    useEffect(() => {
        // console.log(availableTimes)
        // console.log(fetchAPI(date))
        // console.log(initializeTimes)
    })
    return (
        <main>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
            </Routes>

        </main>
    )
}
