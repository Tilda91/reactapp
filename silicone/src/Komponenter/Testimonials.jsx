import React from 'react'
import QuoteIcon from'../assets/images/quote-icon.png'
import Starrating from './Starrating'

function Testimonials ({item}) {
    
  return (
    <div className="testimonial-card">
    <div className="quote-icon">
        <img src={QuoteIcon} alt="Quote Icon" />
    </div>

    <Starrating Starrating= {item.starRating} />
    <p className="testimonial-text">{item.comment}</p>
    <div className="author">
        <img src={item.avatarUrl} alt="Fannie Summers" />
        <div className="author-info">
            <h5>{item.author}</h5>
            <p>{item.jobRole}</p>
        </div>
    </div>
</div>   
  )
}

export default Testimonials


