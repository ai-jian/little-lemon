import React from 'react'

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
    <section>
      <h2>Testimonials</h2>
      {reviews.map((review, index) => (
        <div key={review.name + index}>
          <img src={review.avatarUrl} alt={review.name} />
          <p>{review.name}</p>
          <p>{review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}

    </section>
  )
}
