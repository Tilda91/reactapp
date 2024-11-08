import React from 'react'
import Ping from '../assets/images/bx-map.png'
import LocationMap from'../assets/images/map.png'
import Bxphone from'../assets/images/bx-phone-call.png'
import Clock from'../assets/images/bx-time-five.png'
import Sicon from'../assets/images/S.png'
import Sicon2 from'../assets/images/S2.png'
import Sicon3 from'../assets/images/S3.png'
import Sicon4 from'../assets/images/S4.png'

function Map() {
  return (
    <section className="map">

    <div className="img-map">
        <img src={LocationMap} alt="A map over the location" />
    </div>   
    <div className="map-content">
    <div className="map-info">  
    
        <div className="info">
            <h1>Medical center 1</h1>
        
        <div className="info-content">
            <img className="img" src={Ping} alt="Location" />
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>
        <div className="info-content">
            <img className="img" src={Bxphone} alt="Location" />
            <p>(406) 555-0120</p>
        </div>
        <div className="info-content">
            <img className="img" src={Clock} alt="Location" />
            <div className="text-info">
                <p className="row-one"><span>Mon - Fri:</span>9:00 am - 22:00 am</p>
                <p lass="row-two"><span>Sat - Sun:</span>9:00 am - 20:00 am</p>
            </div>
          
        </div>
        </div>
    </div>

    <div className="info">
        <h1>Medical center 2</h1>
        <div className="info-content">
            <img className="img"src={Ping} alt="Location" />
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
        </div>
        <div className="info-content">
            <img className="img" src={Bxphone} alt="Location" />
            <p>(406) 555-0120</p>
        </div>
        
        <div className="info-content">
            <img className="img" src={Clock} alt="Location" />
            <div className="text-info">
                <p className="row-one"><span>Mon - Fri: </span>9:00 am - 22:00 am</p>
                <p lass="row-two"><span>Sat - Sun: </span>9:00 am - 20:00 am</p>
            </div>
        </div>
    </div>
    
    <div className="social-icons">
        <img src={Sicon} alt="" />
        <img src={Sicon2} alt="" />
        <img src={Sicon3} alt="" />
        <img src={Sicon4} alt="" />
    </div>
    </div>
</section>
  )
}

export default Map