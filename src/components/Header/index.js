import React from "react";

// Styles
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="container">
        <div className="welcomeMessage">
        <p>Śledź swoje statystyki z Instagrama i dobierz najlepsze tagi dla swoich postów!</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
