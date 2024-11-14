import React, { useEffect, useState } from 'react'
import Testimonials from './Testimonials'

function Clients() {
    const [testimonials, setTestimonials] = useState([])

    const getTestimonials = async () => {
        const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonials(data)
    
    }

    useEffect (() => {
        getTestimonials()
    }, [])


  return (
<section className="clients">
    <div>
        <div className="clients-content">
            <div className="headline">
                <p>Clients are</p>
                <p>Loving Our App</p>
            </div>
            <div className="testimonials">
                {
                    testimonials.map((testimonial) => (
                        < Testimonials key={testimonial.id} item={testimonial} />
                ))
                }
           
           </div>
        </div>
    </div>
</section>


  )
}

export default Clients