import React, { useState } from "react";
import "./hpnb.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={menuOpen ? "hamburger-menu-opened" : "hamburger-menu"}>
      <button
        className={`hamburger-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <img className="logo" src="logonara.png"></img>
      <a
        href="https://www.google.com/maps/place/Spetsvinkelgatan+21,+302+50+Halmstad/@56.6625352,12.875406,17z/data=!3m1!4b1!4m6!3m5!1s0x4651a31d249459b5:0x4eae309f60d37527!8m2!3d56.6625352!4d12.8779809!16s%2Fg%2F11c1y0gnrx?entry=ttu"
        className="block"
      >
        <img src="location.png"></img> Hitta hit
      </a>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <a className="nav-link" href="/">
            Hem
          </a>
        </li>
        <li>
          <a className="nav-link" href="meny">
            Meny
          </a>
        </li>
        <li>
          <a className="nav-link" href="kaffeprenumeration">
            Kaffeprenumeration
          </a>
        </li>
        <li>
          <a className="nav-link" href="catering">
            Catering
          </a>
        </li>
        <li>
          <a className="nav-link" href="mailto:info@cafenara.se">
            Kontakt
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
