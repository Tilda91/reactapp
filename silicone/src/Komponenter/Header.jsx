
import React, { useState, useEffect } from 'react';
import Link from'../assets/images/logo-icon.png'




const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check localStorage for dark mode preference on component mount
    useEffect(() => {
      const darkModePreference = localStorage.getItem('darkmode');
      if (darkModePreference === 'on' || (!darkModePreference && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    }, []);
  
    // Enable dark mode function
    const enableDarkMode = () => {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.setItem('darkmode', 'on');
    };
  
    // Disable dark mode function
    const disableDarkMode = () => {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.setItem('darkmode', 'off');
    };
  
    // Toggle dark mode function
    const handleToggleDarkMode = () => {
      if (isDarkMode) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    };
  
  return (
    < >
    <div className="container">
    <div className="navbar">
        
            <div className="logotype">
                <img src={Link} alt="Logo" />
                <h3>Silicon</h3>
            </div>

        <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contacts</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <p id="darkmode-text">Dark mode</p>
          <label htmlFor="darkmode-switch" className="switch" aria-label="darkmode switch">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggleDarkMode} // Toggle function
            />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
            <i className="fa-thin fa-iser-large"></i> 
            <i className="fa-regular fa-user"></i> 
            <span className="signin">Sign in / up</span>        
        </a>
    </div>
</div>
</>
  )
}

export default Header