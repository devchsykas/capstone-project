import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* <hr className="footer-line" /> */}
      <footer className="footer-section">
        <div className="footer-column">
          <h4>Policies</h4>
          <ul className="footer-left-column-list">
            <li className="footer-left-column-list-item">
              <Link to="/Terms">Terms & Conditions</Link>
            </li>
            <li className="footer-left-column-list-item">
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
            <li className="footer-left-column-list-item">
              <Link to="/ShippingPolicy">Shipping Policy</Link>
            </li>
            <li className="footer-left-column-list-item">
              <Link to="/RefundPolicy">Refund Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Additional Info</h4>
          <ul className="footer-left-column-list">
            <li className="footer-left-column-list-item">
              <Link to="/CookiePolicy">Cookie Policy</Link>
            </li>
            <li className="footer-left-column-list-item">
              <Link to="/Faq">FAQ</Link>
            </li>
            <li className="footer-left-column-list-item">
              <Link to="/PaymentsMethods">Payments Methods</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Address</h4>
          <div className="address-info">
            <p>500 Terry Francine St.</p>
            <p>San Francisco, CA 94158</p>
          </div>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <div className="contact-info">
            <p>info@tropifresh.com</p>
            <p>123-456-7890</p>
          </div>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TiSocialFacebook size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaPinterest size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </footer>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <p>© 2025 Tropifresh. All rights reserved.</p>
        <p>Made with ❤️ by Christos Sykas</p>
      </div>
    </>
  );
}

export default Footer;
