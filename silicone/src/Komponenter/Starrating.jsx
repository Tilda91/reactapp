import React from 'react'

function Starrating({Starrating}) {
    const maxStars = 5
    const filledStars = Math.min(Starrating, maxStars)
    const emptyStars = maxStars - filledStars

  return (
    <div className="starRating">

        {
            [...Array(filledStars)].map((_,index) => (
                <i  key={index}className="fa-sharp fa-solid fa-star"></i>
            ))
        }

        {
            [...Array(emptyStars)].map((_,index) => (
                <i key={index} className="fa-sharp fa-regular fa-star"></i>
            ))
        }
     
    </div>
  )
}

export default Starrating