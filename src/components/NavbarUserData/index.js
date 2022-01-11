import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.scss'

export default class NavbarUserData extends Component {
  render() {
    return (
      <div className="navUser">
        <div className="nav-content">
          <ul className="nav-items">
          <li className="nav-item">
            <Link
                activeClass="active"
                to="engagement"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Zaangażowanie
              </Link>
              </li>
              <li className="nav-item">
            <Link
                activeClass="active"
                to="postsStats"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Statystyki postów
              </Link>
              </li>
              <li className="nav-item">
            <Link
                activeClass="active"
                to="topPosts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Najpopularniejsze posty
              </Link>
              </li>
              <li className="nav-item">
            <Link
                activeClass="active"
                to="topFans"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Top fani
              </Link>
              </li>
              <li className="nav-item">
            <Link
                activeClass="active"
                to="comments"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Komentarze bez odpowiedzi
              </Link>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}