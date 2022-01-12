import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './styles.scss'

export default class NavbarUserData extends Component {
  render() {
    return (
        <div class="navHeader">
            Przejdź do sekcji raportu:
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
                to="posts_stats"
                spy={true}
                smooth={true}
                offset={0}
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
              <Link
                activeClass="active"
                to="ghostFollowers"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Ghost followers
              </Link>
              </li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}