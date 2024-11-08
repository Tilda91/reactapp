import React from 'react'
import Group1 from'../assets/images/Group 1-btn.png'
import Iphones from'../assets/images/iphone-dubble.svg'

function Hero() {
  return (
    <section className="hero">
    <div className="hero-sec">
        <div className="headline">
            <h1>Manage All your</h1>
            <h1>Money in One App</h1>
        </div>
        <div className="content">
            <p className="presentation">We offer you a new generation of the mobile banking.<br/>
            Save, spend & manage money in your pocket.</p>

            <div className="buttons">
                <a className="btn-app" href="#">
                    <i className="fa-brands fa-apple fa-xxl apple-icon"></i>
                    <div className="btn-content">
                        <p className="first">Download on the</p>
                        <p className="second">App Store </p>
                    </div>
                </a>
                <a className="btn-app" href="#">
                    <img className="google-btn" src={Group1} alt="Google play" />
                    <div className="btn-content">
                        <p className="get-it">GET IT ON</p>
                        <p className="google-play">Google Play</p>
                    </div>

                </a>
            </div>
        </div>

        <div className="discover-more">
            <a href="#" className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
            </a>
            <span className="disc-text">Discover more</span>
        </div>
            
        <div className="images">
            <img className="iphone" src={Iphones} alt="" />
        </div> 
    </div>
    </section>
  )
}

export default Hero