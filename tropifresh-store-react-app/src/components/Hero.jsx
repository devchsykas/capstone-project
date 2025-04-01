import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Freshly pressed, straight to your door</h2>
          <p className="hero-text">
            At TropiFresh, we're dedicated to goodness in every sip. Delicious,
            fresh juice, just as nature intended.
          </p>
          <button type="button" className="cta-button">
            <Link to="/shop">Shop Now</Link>
          </button>
        </div>
        <div className="hero-image">
          <img src="../public/images/background.png" alt="hero image" />
        </div>
      </section>
      <hr className="hero-line" />
    </>
  );
}

export default Hero;
