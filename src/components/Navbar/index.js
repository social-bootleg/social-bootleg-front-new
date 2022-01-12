import { Link, animateScroll as scroll } from "react-scroll";
import React, { Component } from "react";
import logo from "../../img/logo_sb.png"
import './styles.scss'

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };
    
    render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <div className="welcomeMessage">
        <a href="/" className="welcomeLink" onClick={this.scrollToTop}>
          Social Bootleg
        </a>
        </div>
          <ul className="nav-items">
            <li className="nav-item">
            <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Sprawdź swój profil
              </Link>
              </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Dobierz tagi
              </Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}