import React from 'react'
import './CustomersSay.css'

export default function CustomersSay() {
  const reviews = [{
    name: 'John',
    avatarUrl: '',
    rating: '★★★★★',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    name: 'John',
    avatarUrl: '',
    rating: '★★★★★',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    name: 'John',
    avatarUrl: '',
    rating: '★★★★★',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  {
    name: 'John',
    avatarUrl: '',
    rating: '★★★★★',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
  },
  ]
  return (
    <section id='testimonials'>
      <div className="container">
        <h2>Testimonials</h2>
        <div className="items-wrapper">

          {reviews.map((review, index) => (
            <div key={review.name + index}>
              <img src={review.avatarUrl} alt={review.name} />
              <p>{review.name}</p>
              <p>{review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
