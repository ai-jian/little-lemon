import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.svg'


export default function Nav() {
    const [open, close] = useState('open')
    return (
        <nav>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/">Order online</Link></li>
                <li><Link to="/">Log in</Link></li>
            </ul>
        </nav>
    )
}
