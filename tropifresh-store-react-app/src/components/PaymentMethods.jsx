import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

const PaymentMethods = () => {
  return (
    <>
      <div className="payment-methods-container">
        <h1 className="payment-methods-title">Payment Methods</h1>
        <p className="payment-methods-text">
          We offer a variety of payment methods to ensure a smooth and secure
          checkout experience.
        </p>
        <h2 className="payment-methods-subtitle">Accepted Payment Methods</h2>
        <ul className="payment-methods-list">
          <li className="payment-methods-list-item">
            Credit Cards (Visa, MasterCard, American Express) -
            <FaCcVisa size={48} color="blue" className="payment-methods-icon" />
            <FaCcMastercard
              size={48}
              color="red"
              className="payment-methods-icon"
            />
            <SiAmericanexpress
              size={48}
              color="black"
              className="payment-methods-icon"
            />
          </li>
          <li className="payment-methods-list-item">
            PayPal -
            <FaCcPaypal
              size={48}
              color="yellow"
              className="payment-methods-icon"
            />
          </li>
          <li className="payment-methods-list-item">
            Apple Pay -
            <FaCcApplePay
              size={48}
              color="silver"
              className="payment-methods-icon"
            />
          </li>
          <li className="payment-methods-list-item">
            Google Pay -
            <FaGooglePay
              size={48}
              color="green"
              className="payment-methods-icon"
            />
          </li>
        </ul>
        <h2 className="payment-methods-subtitle">Security Measures</h2>
        <p className="payment-methods-text">
          We use industry-standard encryption to protect your payment
          information during transactions.
        </p>
        <h2 className="payment-methods-subtitle">Contact Information</h2>
        <p className="payment-methods-text">
          If you have any questions regarding payment methods, please contact us
          at info@tropifresh.com.
        </p>
      </div>
      <hr className="payment-methods-line" />
    </>
  );
};

export default PaymentMethods;
