import React, { useState } from 'react';
import Bell from '../assets/images/notification-icon.png';
import Emailicon from '../assets/images/bx-envelope.svg';

function Thelast() {
    // State för e-postinmatning och felmeddelande
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Valideringsfunktion för e-post
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Hantering av formulärinlämning
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kolla om e-post är giltig
        if (!email) {
            setError('Email address is required.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            console.log('Form submitted with email:', email);
            alert('Thank you for subscribing!');
            // Rensa e-postfältet efter inlämning
            setEmail('');
        }
    };

    return (
        <section className="the-last">
            <div className="last-content">
                <div className="not-img">
                    <img src={Bell} alt="Bell" />
                </div>
                <div className="last-headline">
                    <h4>Subscribe to our newsletter to stay<br />informed about latest updates</h4>
                </div>

                <div className="wrapper"> 
                    <form className="input-btn" onSubmit={handleSubmit} noValidate> 
                        <img className="email-icon" src={Emailicon} alt="Email Icon" />
                        
                        <input
                            className="form-input email"
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError(''); // Rensa felmeddelande när användaren skriver
                            }}
                        />

                        {/* Prenumerera-knapp */}    
                        <button type="submit" className="btn-primary">Subscribe</button>

                        {/* Felmeddelande */}
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Thelast;























































/*import React from 'react'
import Bell from'../assets/images/notification-icon.png'
import Emailicon from'../assets/images/bx-envelope.svg'
import React, { useState } from 'react';
//import Emailicon from './path-to-your-email-icon'; // Replace with the actual path

function Thelast() {
    // State for email input and error message
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    // Email validation function
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email is valid
        if (!email) {
            setError;
            
        } else if (!validateEmail(email)) {
            setError;
        } else {
            setError('');
            console.log('Form submitted with email:', email);
            alert('Thank you for subscribing!');
            // Clear email input after submission
            setEmail('');
        }
    };

    return (
        <section lass="the-last">
        <div className="last-content">
            <div className="not-img">
                <img src={Bell} alt="Bell" />
            </div>
            <div className="last-headline">
                <h4>Subscribe to our newsletter to stay<br />informed about latest updates</h4>
            </div>
            
        <div className="wrapper"> 
            <form className="input-btn" onSubmit={handleSubmit} noValidate> 
                <img className="email-icon" src={Emailicon} alt="Email Icon" />
                
                <input
                    className="form-input email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError(''); // Clear error when user types
                    }}
                />

              {/* Subscribe button */
                 /* <button type="submit" className="btn-primary">Subscribe</button>

                {Error message}
                {error && <p className="error-message">{error}</p> }
            </form>
        </div>
        </div>
        </section>
    );
}
    

export default Thelast;*/







/*

function Thelast() {
  return (
    <section lass="the-last">
    <div className="last-content">
        <div className="not-img">
            <img src={Bell} alt="Bell" />
        </div>
        <div className="last-headline">
            <h4>Subscribe to our newsletter to stay<br />informed about latest updates</h4>
        </div>
        
        <div className="wrapper">
            <div className="input-btn">
                <img className="email-icon" src={Emailicon} alt="" />
                <input className="form-input email" type="email" placeholder="Your Email" />
                <button className="btn-primary">Subscribe</button>
            </div>
        </div>

        
    </div>
</section>



  )
}

export default Thelast

*/