import React from 'react'
import Contactvisa from'../assets/images/contact-visacard.png'
import IconA from'../assets/images/icon A.png'
import IconB from'../assets/images/icon B.png'

function Receive() {
  return (
    <section className="receive">
    <div className="receive-payment">

        <div className="receive-image">
            <img src={Contactvisa}alt="Contact picture with a purple visa card." />
       
        </div>

        <div className="receive-content">

            <div className="receive-headline">
                <h3>Receive payment from</h3>
                <h3>international bank details</h3>
            </div>

            <div className="receive-icons">
                <div className="icon">
                    <img className="bild" src={IconA} alt="Icon A" /> 
                    <p className="icon-text">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>

                <div className="icon">
                    <img className="bild" src={IconB} alt="Icon B" /> 
                    <p className="icon-text">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
            </div>

            <div className="receive-btn">
                <a href="#" className="btn-primary">
                    <p className="learn-more">Learn More</p>  
                    <i className="fa-solid fa-arrow-right"></i>      
                </a>
            </div>
        </div>
    </div>
</section>

  )
}

export default Receive