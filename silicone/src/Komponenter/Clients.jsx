import React from 'react'
import QuoteIcon from'../assets/images/quote-icon.png'
import Avatar1 from'../assets/images/avatar.png'
import Avatar2 from'../assets/images/avatar-guy.png'

function Clients() {
  return (
<section className="clients">
    <div>
        <div className="clients-content">
            <div className="headline">
                <p>Clients are</p>
                <p>Loving Our App</p>
            </div>
            <div className="testimonial-card">
                <div className="quote-icon">
                    <img src={QuoteIcon} alt="Quote Icon" />
                </div>
                <div className="stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                </div>
                <p className="testimonial-text">
                    Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
                </p>
                <div className="author">
                    <img src={Avatar1} alt="Fannie Summers" />
                    <div className="author-info">
                        <h5>Fannie Summers</h5>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="quote-icon">
                    <img src={QuoteIcon} alt="Quote Icon" />
                </div>
                <div className="stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="testimonial-text">
                    Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
                </p>
                <div className="author">
                    <img src={Avatar2} alt="Albert Flores" />
                    <div className="author-info">
                        <h5>Albert Flores</h5>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


  )
}

export default Clients