import React from 'react'
import CTAImg from '../images/restauranfood.jpg'

export default function CallToAction() {
    return (
        <section id='CTA'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a table</button>
            <img src={CTAImg} alt="restaurant food" />
        </section>
    )
}
