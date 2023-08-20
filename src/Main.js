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
// const initialAvailableTimes = [
//     '11:30 AM', available: true },
//     { time: '11:45 AM', available: true },
//     { time: '12:00 PM', available: true },
//     { time: '12:15 PM', available: true },
//     { time: '12:30 PM', available: true },
//     { time: '12:45 PM', available: true },
//     { time: '1:00 PM', available: true },
//     { time: '1:15 PM', available: true },
//     { time: '1:30 PM', available: true },
//     { time: '1:45 PM', available: true },

//     { time: '5:30 PM', available: true },
//     { time: '5:45 PM', available: true },
//     { time: '6:00 PM', available: true },
//     { time: '6:15 PM', available: true },
//     { time: '6:30 PM', available: true },
//     { time: '6:45 PM', available: true },
//     { time: '7:00 PM', available: true },
//     { time: '7:15 PM', available: true },
//     { time: '7:30 PM', available: true },
//     { time: '7:45 PM', available: true },
//     { time: '8:00 PM', available: true },
//     { time: '8:15 PM', available: true },
//     { time: '8:30 PM', available: true },
// ]


// const availableTimesReducer = (state, action) => {
//     switch (action.type) {
//         case ACTION.UPDATE_DATE:
//             return state
//         default:
//             throw new Error()
//     }
// }

export default function Main() {

    const updateTimes = (availableTimes, date) => {

        return availableTimes, date
    }

    const initializeTimes = (initialAvailableTimes) => {
        return initialAvailableTimes
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)

    useEffect(() => {
        // console.log(availableTimes)
        console.log(initializeTimes)
    })
    return (
        <main>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
            </Routes>
            {/* {availableTimes.lunch.map((availableTimes) => {
                return <p>{availableTimes.time}</p>
            })} */}
        </main>
    )
}
