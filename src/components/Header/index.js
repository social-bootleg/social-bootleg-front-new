import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// Styles
import "./style.scss";

const Header = () => {
  // scrollToContent = () =>{
  //   <Link
  //   activeClass="active"
  //   to="section1"
  //   spy={true}
  //   smooth={true}
  //   offset={-70}
  //   duration={500}
  // >
  //   Sprawdź swój profil
  // </Link>
  // }
  return (
    <header className="header">
      <div className="logo"></div>
      <div className="container">
        <div className="welcomeMessage">
        Śledź swoje statystyki z Instagrama i dobierz najlepsze tagi dla swoich postów!
        <br></br>
        <Link className="welcomeLink"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sprawdź swój profil
              </Link>
        </div>
        <div>
        
        </div>
      </div>
    </header>
  );
};

export default Header;
