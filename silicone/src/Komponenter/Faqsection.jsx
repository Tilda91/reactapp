import React, { useState, useEffect } from 'react'
import Telicon from'../assets/images/tefon-icon.png'
import Smsicon from'../assets/images/sms-icon.png'
import FaqItem from './FaqItem'
       

function Faqsection() {
    const [faqItems, setFaqItems] = useState([])

    useEffect( () => {
          async function getFaqItems() {
            const res = await fetch("https://win24-assignment.azurewebsites.net/api/faq")
            const data = await res.json()
            const faqReactItems = []
            for (let index = 0; index < data.length; index++) {
                faqReactItems.push(data[index])
            }
            setFaqItems(faqReactItems)
        }
        getFaqItems()
    }, [])
    
    return (
        <section className="FAQ-SECTION">
                <div className="FAQ">
                    <div className="faq-btns">
                        <div className="faq-content">
                            <h1>Any questions?<br />Check out the FAQs</h1>
                            <p>Still have unanswered questions and need to get in touch?</p>
                        </div>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="icon">
                                    <img src={Telicon} alt="Phone Icon" />
                                </div>
                                <p className="question-text">Still have questions?</p>
                                <a href="#" className="contact-link">
                                    <i className="fa-thin fa-iser-large"></i>
                                    <span className="FAQ-text">Contact us </span>  
                                    <i className="fa-solid fa-arrow-right"></i>   
                                </a>
                            </div>

                            <div className="contact-card-two">
                                <div className="icon">
                                    <img src={Smsicon} alt="Phone Icon" />
                                </div>
                                <p className="question-text">Don't like phone calls</p>
                                <a href="#" className="contact-link">
                                    <i className="fa-thin fa-iser-large"></i>
                                    <span className="FAQ-text"> Contact us </span>  
                                    <i className="fa-solid fa-arrow-right"></i>   
                                </a>
                            </div>
                        </div>
                    </div>
                
                <div className="faq-container" id="faq-container">
                    {
                        faqItems.map(item => (
                            <FaqItem key={item.id} item={item}/>
                        ))
                    }
                    </div>
                </div>
            </section>


    )
}

export default Faqsection