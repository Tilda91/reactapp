import React from 'react'
import Checkcircle from'../assets/images/bx-check-circle.png'
import Img1 from'../assets/images/inner- bakom.svg'
import Img2 from'../assets/images/inner-rektangulär.svg'

function Makeyourmoney() {
  return (
    <section className="make-your-money">
           
            <ul>
                <li>
                    <div className="makeyour-headline">
                        <h2>Make your money<br />transfer simple and clear</h2>
                    </div>

                    <div className="icon-list">
                        <img src={Checkcircle} alt="checkbox" />
                        <p>Banking transactions are free for you</p>
                     </div>
                </li>
            
                <li>
                    <div className="icon-list">
                        <img src={Checkcircle} alt="checkbox" />
                        <p>No monthly cash commission</p>
                    </div>
                </li>

                <li>
                    <div className="icon-list">
                        <img src={Checkcircle} alt="checkbox" />
                        <p>Manage payments and transactions online</p>
                    </div>
                </li>
                <li>
                    <a id="btn-learn" href="#" className="btn-primary">
                        <i className="fa-thin fa-iser-large"></i>
                        <span className="learn-more">Learn More</span>  
                        <i className="fa-solid fa-arrow-right"></i>      
                    </a>
                </li>
            </ul>

            <div className="makeyourmoney-images">
                <img className="back-card" src={Img1} alt="Iphone" />
                <img className="small-card" src={Img2} alt="Pruple Visa card" />
            </div>
                    
            
            
        </section>
  )
}

export default Makeyourmoney