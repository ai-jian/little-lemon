import React from 'react'
import MarioAndAndrianA from '../images/Mario and Adrian A.jpg'
import MarioAndAndrianB from '../images/Mario and Adrian b.jpg'

export default function Chicago() {
    return (
        <section id='about'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
            <img src={MarioAndAndrianA} alt="Mario And Andrian" />
            <img src={MarioAndAndrianB} alt="Mario And Andrian" />
        </section>
    )
}
