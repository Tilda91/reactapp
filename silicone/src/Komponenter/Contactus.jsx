import React, { useState } from 'react';

function Contactus() {

    const [formValues, setFormValues] = useState({
        fullname: '',
        email: '',
        specialist: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Kontrollera att fälten inte är tomma
        if (!formValues.fullname.trim()) {
            newErrors.fullname = 'Full name is required';
        }
        if (!formValues.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formValues.specialist) {
            newErrors.specialist = 'Please select a specialist';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Om inga fel finns, kan vi skicka formuläret
            console.log('Form submitted:', formValues);
            // Här kan du skicka data till servern
        }
    };












  return (
    <section className="contact-us">
    <div className="contact-container">
  
        <div className="contact-menu">
            <i className="house fa-solid fa-house fa-xs"></i>
            <p>Homepage</p>
            <i className="arrow fa-solid fa-angles-right fa-xs"></i>
            <p className="contact">Contact</p>
        </div>

    <div className="contact-headline">
        <h1>Contact us</h1>
    </div>

    <div className="contact-options">
        <div className="contact-item">
            <div className="icon-circle">
                <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text-contact">
                <h3>Email us</h3>
                <p>Please feel free to drop us a line. We will</p>
                <p>respond as soon as possible.</p>
                <a href="#">Leave a message <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    
        <div className="contact-item">
            <div className="icon-circle">
                <i className="fa-solid fa-users"></i>
            </div>
            <div className="text-contact">
                <h3>Careers</h3>
                <p>Sit ac ipsum leo lorem magna nunc mattis</p>
                <p>maecenas non vestibulum.</p>
                <a href="#">Send an application <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>    
</div>

<div className="consultation-form">
            <h2>Get Online Consultation</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="fullname">Full name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        placeholder="Enter your full name"
                        value={formValues.fullname}
                        onChange={handleInputChange}
                    />
                    {errors.fullname && <p className="error">{errors.fullname}</p>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="specialist">Specialist</label>
                    <select
                        id="specialist"
                        name="specialist"
                        value={formValues.specialist}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Specialist</option>
                        <option value="dentist">Dentist</option>
                        <option value="cardiologist">Cardiologist</option>
                        <option value="neurologist">Neurologist</option>
                    </select>
                    {errors.specialist && <p className="error">{errors.specialist}</p>}
                </div>
                
                <button className="form-button" type="submit">
                    Make an appointment
                </button>
            </form>
        </div>

</section>
  )
}

export default Contactus