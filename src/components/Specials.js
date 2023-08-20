import React from 'react'
import salad from '../images/greek-salad.jpg'
import bruchetta from '../images/bruchetta.jpg'
import cake from '../images/lemon-dessert.jpg'

export default function Specials() {
    const specials = [{
        title: 'Greek Salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        imageUrl: salad
    },
    {
        title: 'Brushetta',
        price: 7.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        imageUrl: bruchetta
    },
    {
        title: 'Lemon Cake',
        price: 5.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
        imageUrl: cake
    },
    ]
    return (
        <section>
            <h2>Weekly Specials!</h2>
            <button>Online Menu</button>
            {specials.map((special) => (
                <div key={special.title}>
                    <img src={special.imageUrl} alt={special.title} />
                    <h6>{special.title}</h6>
                    <p>${special.price}</p>
                    <p>{special.description}</p>
                    <button>Add to cart</button>
                </div>
            ))}
        </section>
    )
}
