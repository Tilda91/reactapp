import React from 'react'
import Yourcard from'../assets/images/yourcards-iphone.svg'
import PurpleVisa from'../assets/images/purple-visa-card.svg'
import Icon1 from'../assets/images/icon1.svg'
import Icon2 from'../assets/images/icon2.svg'
import Icon3 from'../assets/images/icon3.svg'
import Icon4 from'../assets/images/icon4.svg'
import Icon5 from'../assets/images/icon5.svg'
import Icon6 from'../assets/images/icon6.svg'


function Appfeautres() {
  return (
    <section className="appfeautres">
    <div className="container">
        <div className="appfeautres-images">
            <img className="iphone" src= {Yourcard} alt="Iphone" />
            <img className="card" src= {PurpleVisa} alt="Pruple Visa card"/>
        </div>

        <div className="appfeatures-headline">
            <h1>App Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.</p>
            <p >Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p> 
        </div>

        <div className="icons">
            <div className="app-icon">
                <img className="bild" src={Icon1} alt="Icon1" /> 
                <h5>Easy Payments</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
        
           
            <div className="app-icon">
                <img className="bild" src={Icon2} alt="Icon2" /> 
                <h5>Data Security</h5>
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>

            <div className="app-icon">
                <img className="bild" src={Icon3} alt="Icon3" /> 
                <h5>Cost Statistic</h5>
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>

            <div className="app-icon">
                <img className="bild" src={Icon4} alt="Icon4" /> 
                <h5>Support 24/7 </h5>
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>

            <div className="app-icon">
                <img className="bild" src={Icon5} alt="Icon5" /> 
                <h5>Regular Cashback</h5>
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>

            <div className="app-icon">
                <img className="bild" src= {Icon6} alt="Icon6" /> 
                <h5>Top Standards</h5>
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
        </div>
    </div>

</section>
  )
}

export default Appfeautres