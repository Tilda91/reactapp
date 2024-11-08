import React from 'react'
import Iphone1 from'../assets/images/iphone- mybudget-transperant.png'
import Iphone2 from'../assets/images/iPhone-middle- yourcards.png'
import Iphone3 from'../assets/images/iPhone 12 Pro-uno.png'

function Howdoesitwork() {
  return (
    <section className="how-does-it-work">
            <div className="container">
                <div className="headline">
                    <h1>How does it work?</h1>
                </div>
                <div className="row">
                    <img id="padding" src={Iphone1} alt="Bild1" />
                    <img id="padding" src={Iphone2} alt="Bild2" />
                    <img id="padding" src={Iphone3} alt="Bild3" />
                </div>
                <div className="undertext">
                    <div className="second-headline">
                        <h3>Latest transaction history</h3>
                    </div>
                    <div className="text">
                        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique <br/> quisque hac in consectetur condimentum. </p>
                    </div>   
                </div>
            </div>
        </section>
  )
}

export default Howdoesitwork