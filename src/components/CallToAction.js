import './CallToAction.css'
import React from 'react'
import CTAImg from '../images/restauranfood.jpg'
import { Link } from 'react-router-dom'


export default function CallToAction() {
    return (
        <section id='CTA'>
            <div className='container'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <div className='info'>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/booking'>
                        <button>Reserve a table</button>
                    </Link>
                </div>
                <img src={CTAImg} alt="restaurant food" />
            </div>
        </section>
    )
}
