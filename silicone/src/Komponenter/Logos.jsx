import React from 'react'
import Logo1 from'../assets/images/logo1.svg'
import Logo2 from'../assets/images/logo2.svg'
import Logo3 from'../assets/images/logo3.svg'
import Logo4 from'../assets/images/logo3.svg'
import Logo5 from'../assets/images/logo5.svg'
import Logo6 from'../assets/images/logo6.svg'

function Logos () {
  return (
    <section className="logos">
    <div className="logo-box">
        <img src= {Logo1} alt="Logo 1" />
    </div>
    <div className="logo-box">
        <img src={Logo2} alt="Logo 2" />
    </div>
    <div  className="logo-box">
        <img src={Logo3} alt="Logo 3" />
    </div>
    <div  className="logo-box">
        <img src={Logo4} alt="Logo 4" />
    </div>
    <div  className="logo-box">
        <img src={Logo5} alt="Logo 5" />
    </div>
    <div id="logo-6" className="logo-box">
        <img src={Logo6} alt="Logo 6" />
    </div>
</section>
  )
}

export default Logos