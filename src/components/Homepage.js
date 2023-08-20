import React from 'react'
import Specials from './Specials'
import CallToAction from './CallToAction'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'
import { Route, Routes } from 'react-router-dom'

export default function Homepage() {
    return (
        <>
            {/* <Routes>
                <Route path='/' element={<CallToAction />} />
            </Routes> */}
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    )
}
