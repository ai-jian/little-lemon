import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Logo.svg'
import basket from '../images/Basket.svg'


export default function Nav() {
    const [open, close] = useState(false)
    return (
        <div className='container'>
            <nav className="mobile-nav">
                <div
                    className='nav-hamburger'
                    onClick={() => close(!open)}
                >
                    <span className='nav-hamburger-bar'></span>
                    <span className='nav-hamburger-bar'></span>
                    <span className='nav-hamburger-bar'></span>
                </div>
                <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
                <img src={basket} alt="basket icon" className='nav-icon' />
                {open ?
                    <ul>
                        <li onClick={() => close(!open)}><Link to="/">Home</Link></li>
                        <li onClick={() => close(!open)}><Link to="/about">About</Link></li>
                        <li onClick={() => close(!open)}><Link to="/menu">Menu</Link></li>
                        <li onClick={() => close(!open)}><Link to="/booking">Reservation</Link></li>
                        <li onClick={() => close(!open)}><Link to="/order">Order online</Link></li>
                        <li onClick={() => close(!open)}><Link to="/login">Log in</Link></li>
                    </ul>
                    : ""}
            </nav>

            <nav className="desktop-nav">
                <Link to="/"><img src={logo} alt="logo" className='logo' /></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservation</Link></li>
                    <li><Link to="/order">Order online</Link></li>
                    <li><Link to="/login">Log in</Link></li>
                </ul>
            </nav>


        </div>
    )
}
