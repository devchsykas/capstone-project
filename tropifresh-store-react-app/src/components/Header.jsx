import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { HiMenu } from "react-icons/hi"; // Hamburger icon for mobile

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="free-shipping">
        <p className="free-shipping-text">free shipping on orders over $100</p>
      </div>
      <hr className="header-line" />
      <header className="nav-section">
        <div className="left-nav-section">
          <div className="logo">
            <Link to="/">
              <img
                src="../public/images/logo-no-bg.png"
                alt="TropiFresh logo"
              />
            </Link>
          </div>
        </div>
        <nav className={`navbar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <NavLink to="/" className="navbar-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="navbar-list-item">
              <NavLink
                to="/shop"
                className="navbar-link"
                activeClassName="active"
              >
                Shop
              </NavLink>
            </li>
            <li className="navbar-list-item">
              <NavLink
                to="/about"
                className="navbar-link"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li className="navbar-list-item">
              <NavLink
                to="/contact"
                className="navbar-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="right-nav-section">
          <Link to="/login" className="login-link">
            <CiUser size={20} className="login-icon" />
            <span className="login">Log In</span>
          </Link>
          <Link to="/cart" className="cart-link">
            <CiShoppingCart size={20} className="cart-icon" />
            <span className="cart">Cart</span>
          </Link>
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            <HiMenu size={24} />
          </div>
        </div>
      </header>
      <hr className="nav-line" />
    </>
  );
}

export default Header;
