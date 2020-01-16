import React, { useState } from 'react';

import useDarkMode from "./hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  console.log("Darkmode in Navbar is", darkMode)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode-div">
        <div className={"dark-mode-label" + (darkMode ? " dark-mode-label-toggled" : "")}>
          Dark Mode {darkMode ? 'ON' : 'OFF'}
        </div>
      
        <div className="dark-mode__toggle" onClick={toggleMode}>
          <div
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
