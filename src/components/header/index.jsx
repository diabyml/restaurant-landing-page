import React, { useState } from "react";
import "./style.scss";

// ASSETS
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";

function Header({ isOpen, toggleMenu }) {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkId) => setActiveLink(linkId);

  return (
    <header className="site-header bg-primary">
      <div className="wrapper">
        <div className="site-header__content">
          <div className="site-header__left-section">
            <button className="site-header__menu-button" onClick={toggleMenu}>
              {/* <span></span>
              <span></span>
              <span></span> */}
              Menu
            </button>
            <Logo className="site-header__logo" />
          </div>
          <nav className="site-header__nav">
            <ul className={`site-header__nav-wrapper ${isOpen && "active"}`}>
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <button
                    className={`site-header__link ${
                      activeLink === menuItem.id && "active-link"
                    }`}
                    onClick={() => handleLinkClick(menuItem.id)}
                  >
                    {menuItem.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header__right-section">
            <Cart className="site-header__cart" />
          </div>
        </div>
      </div>
    </header>
  );
}

const menuItems = [
  { id: "home", name: "Home" },
  { id: "menu", name: "Menu" },
  { id: "service", name: "Service" },
  { id: "signin", name: "Sign in" },
];

export default Header;
