import React, { useState } from 'react';
import Bell from '../assets/images/notification-icon.png';
import Emailicon from '../assets/images/bx-envelope.svg';

function Thelast() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError('Email address is required.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            console.log('Form submitted with email:', email);
            alert('Thank you for subscribing!');
            
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
                                setError(''); 
                            }}
                        />
 
                        <button type="submit" className="btn-primary">Subscribe</button>
                         
                         {error && <p className="error-message">{error}</p>}
                         
 
                     </form>
                       
                </div>
               
            </div>
        </section>
    );
}

export default Thelast;






























































