import { useState } from "react";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import HamburgerMenu from "./navbar";

const menuData = {
  VarmaDrycker: [
    {
      header: "Varma Drycker",
      name: "Bryggkaffe Liten",
      price: "15kr",
    },
    {
      name: "Bryggkaffe Stor",
      price: "22kr",
    },
    {
      name: "Espresso Enkel",
      price: "15kr",
    },
    {
      name: "Espresso Dubbel",
      price: "22kr",
    },
    {
      name: "Cortado Enkel",
      price: "24kr",
    },
    {
      name: "Cortado Dubbel",
      price: "30kr",
    },
    {
      name: "Cappuccino Liten",
      price: "24kr",
    },
    {
      name: "Cappuccino Stor",
      price: "30kr",
    },
    {
      name: "Americano Liten",
      price: "24kr",
    },
    {
      name: "Americano Stor",
      price: "28kr",
    },
    {
      name: "Caffé Latte",
      price: "30kr",
    },
    {
      name: "Chai Latte Stor",
      price: "30kr",
    },
    {
      name: "Caffé Mocha",
      price: "30kr",
    },
    {
      name: "Varm Choklad",
      price: "30kr",
    },
    {
      name: "Latte Macchiato",
      price: "30kr",
    },
    {
      name: "TE",
      price: "15kr",
    },
  ],

  KallaDrycker: [
    {
      header: "Kalla Drycker",
      name: "Red Bull (olika smaker)",
      price: "28kr",
    },
    {
      name: "Nocco (olika smaker)",
      price: "30kr",
    },
    {
      name: "Vitamin Well (olika smaker)",
      price: "30kr",
    },
    {
      name: "Celsius (olika smaker)",
      price: "30kr",
    },
    {
      name: "Power King",
      price: "18kr",
    },
    {
      name: "Vatten Naturell",
      price: "15kr",
    },
    {
      name: "Aloe Vera (olika smaker)",
      price: "30kr",
    },
    {
      name: "Flaska PET (olika smaker)",
      price: "25kr",
    },
    {
      name: "Loka PET (olika smaker)",
      price: "20kr",
    },
    {
      name: "Festis PET (olika smaker)",
      price: "24kr",
    },
    {
      name: "MER PET (olika smaker)",
      price: "20kr",
    },
    {
      name: "Ramlösa PET (olika smaker)",
      price: "24kr",
    },
    {
      name: "Läsk Burk (olika smaker)",
      price: "15kr",
    },
    {
      name: "Capri Sun (olika smaker)",
      price: "18kr",
    },
    {
      name: "Barebells Milkshake (olika smaker)",
      price: "32kr",
    },
    {
      name: "Iskaffe Löfbergs (olika smaker)",
      price: "32kr",
    },
    {
      name: "Pucko",
      price: "22kr",
    },
    {
      name: "Froosh Smoothie (olika smaker)",
      price: "32kr",
    },
  ],

  Mat: [
    {
      header: "Mat",
      name: "Salladsbar",
      price: "12,90kr kr/hg",
    },
    {
      name: "Ciabatta Kyckling & Mozzarella",
      price: "55kr",
    },
    {
      name: "Ciabatta Salami & Brie",
      price: "55kr",
    },
    {
      name: "Ciabatta Tomat & Mozzarella",
      price: "45kr",
    },
    {
      name: "Grillkorv",
      price: "18kr",
    },
    {
      name: "Kycklingkorv",
      price: "18kr",
    },
    {
      name: "Fransk Hotdog",
      price: "25kr",
    },
    {
      name: "Smörgås Ost",
      price: "20kr",
    },
    {
      name: "Smörgås Ost & Skinka",
      price: "24kr",
    },
    {
      name: "Smörgås Ost & Kalkon",
      price: "24kr",
    },
    {
      name: "Dressing (olika smaker)",
      price: "10kr",
    },
  ],
};

export default function App() {
  return (
    <>
      <HamburgerMenu />
      <SecondNavbar />
      <HeroSection />
      <LogoCarousel />
      <Menu />
      <SponserCarousel />
      <Footer />
    </>
  );
}

const SecondNavbar = (props) => {
  return (
    <div className="second-navbar-section">
      <div className="second-navbar-container">
        <p>Vi har öppet alla vardagar mellan kl. 8-16</p>
      </div>
    </div>
  );
};

const HeroSection = (props) => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-container-left">
            <h2 className="hero-section-heading">
              Saknar du studiemotivation? Varje kopp kaffe är en kick av
              inspiration!
            </h2>

            <p className="hero-section-description">
              Vi erbjuder kaffe gjord på färskmalda fairtrade bönor, goda
              frallor, kalla drycker och en fräsh sallad. Välkomna in!
            </p>

            <button className="hero-button">Se vår meny</button>
          </div>

          <img className="hero-image" alt="cafenara" src="cafenara.jpg"></img>
        </div>
      </div>
    </>
  );
};

export const Menu = (props) => {
  const [subMenu, setSubMenu] = useState(Object.keys(menuData)[0]);
  const [menuSections, setMenuSections] = useState(Object.keys(menuData));

  return (
    <>
      <div className="menu-header">
        <div className="menu-header-content">
          <p className="menu-header-welcome">Välkommen!</p>
          <h1 className="menu-header-heading">Något för alla!</h1>
          <p className="menu-header-description">
            Sugen på frukost, lunch, brunch eller fika?
          </p>
        </div>
      </div>

      <div className="submenu-links-section">
        <div className="submenu-links-container">
          {menuSections.map((section) => (
            <li
              onClick={() => setSubMenu(section)}
              className={
                subMenu === section ? "submenu-link-clicked" : "submenu-link"
              }
            >
              {menuData[section][0].header}
            </li>
          ))}
        </div>
      </div>

      <div className="submenu-section">
        <div className="submenu-container">
          {menuData[subMenu].map((v) => (
            <ProductElement product={v} />
          ))}
        </div>
      </div>
    </>
  );
};

function ProductElement(props) {
  return (
    <div className="submenu-product">
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
    </div>
  );
}

function LogoCarousel() {
  return (
    <div className="logos">
      <div className="logo-slide">
        <p>Don't walk, Dance!</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Success is the best revenge</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>You're amazing</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Keep going, you're getting there!</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Smile, you're beautiful</p>
        <img alt="heart" src="heart.jpg"></img>
      </div>
      <div className="logo-slide">
        <p>Don't walk, Dance!</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Success is the best revenge</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>You're amazing</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Keep going, you're getting there!</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Smile, you're beautiful</p>
        <img alt="heart" src="heart.jpg"></img>
      </div>
      <div className="logo-slide">
        <p>Don't walk, Dance!</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Success is the best revenge</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>You're amazing</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Keep going, you're getting there!</p>
        <img alt="heart" src="heart.jpg"></img>
        <p>Smile, you're beautiful</p>
        <img alt="heart" src="heart.jpg"></img>
      </div>
    </div>
  );
}

function SponserCarousel() {
  return (
    <div className="logos">
      <div className="logo-slide-2">
        <img
          alt="log"
          className="log"
          style={{ width: "65px" }}
          src="marabou.png"
        ></img>
        <img alt="log" className="log" src="nocco.png"></img>
        <img alt="log" className="log" src="malaco.png"></img>
        <img alt="log" className="log" src="kahls.png"></img>
        <img alt="log" className="log" src="redbull.png"></img>
        <img
          alt="log"
          className="log"
          style={{ width: "65px" }}
          src="cocacola.png"
        ></img>
        <img
          alt="log"
          className="log"
          style={{ width: "85px" }}
          src="ramlosa.png"
        ></img>
        <img alt="log" className="log" src="vitamin.png"></img>
        <img
          alt="log"
          className="log"
          style={{ width: "65px" }}
          src="barbells.png"
        ></img>
        <img
          alt="log"
          className="log"
          style={{ width: "65px" }}
          src="cloetta.png"
        ></img>
      </div>
      <div className="logo-slide-2">
        <img alt="log" className="log" src="marabou.png"></img>
        <img alt="log" className="log" src="nocco.png"></img>
        <img alt="log" className="log" src="malaco.png"></img>
        <img alt="log" className="log" src="kahls.png"></img>
        <img alt="log" className="log" src="redbull.png"></img>
        <img alt="log" className="log" src="cocacola.png"></img>
        <img alt="log" className="log" src="ramlosa.png"></img>
        <img alt="log" className="log" src="vitamin.png"></img>
        <img alt="log" className="log" src="barbells.png"></img>
        <img alt="log" className="log" src="cloetta.png"></img>
      </div>
      <div className="logo-slide-2">
        <img alt="log" className="log" src="marabou.png"></img>
        <img alt="log" className="log" src="nocco.png"></img>
        <img alt="log" className="log" src="malaco.png"></img>
        <img alt="log" className="log" src="kahls.png"></img>
        <img alt="log" className="log" src="redbull.png"></img>
        <img alt="log" className="log" src="cocacola.png"></img>
        <img alt="log" className="log" src="ramlosa.png"></img>
        <img alt="log" className="log" src="vitamin.png"></img>
        <img alt="log" className="log" src="barbells.png"></img>
        <img alt="log" className="log" src="cloetta.png"></img>
      </div>
      <div className="logo-slide-2">
        <img alt="log" className="log" src="marabou.png"></img>
        <img alt="log" className="log" src="nocco.png"></img>
        <img alt="log" className="log" src="malaco.png"></img>
        <img alt="log" className="log" src="kahls.png"></img>
        <img alt="log" className="log" src="redbull.png"></img>
        <img alt="log" className="log" src="cocacola.png"></img>
        <img alt="log" className="log" src="ramlosa.png"></img>
        <img alt="log" className="log" src="vitamin.png"></img>
        <img alt="log" className="log" src="barbells.png"></img>
        <img alt="log" className="log" src="cloetta.png"></img>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <p>Cafe Nära - All rights reserved, 2023</p>
    </div>
  );
}
