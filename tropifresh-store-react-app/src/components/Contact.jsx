import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-us">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-info-text">
            Feel free to reach out with any questions, comments, or inquiries.
            We'd be happy to help.
          </p>
          <hr className="contact-line" />
          <h3 className="other-ways">Other Ways to reach us</h3>
          <ul className="contact-list">
            <li className="contact-item">
              Email:{" "}
              <a href="mailto:info@tropifresh.com">info@tropifresh.com</a>
            </li>
            <li className="contact-item">
              Phone: <a href="tel:+1234567890">+1 (123) 456-7890</a>
            </li>
          </ul>
          <div className="address">
            <h4 className="address-title">Address:</h4>
            <p>500 Terry Francine St.</p>
            <p>San Francisco, </p>
            <p>CA 94158</p>
          </div>
        </div>
        <form
          action="submit"
          className="contact-form"
          name="contact-form"
          method="post"
        >
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
      <hr className="contact-line" />
    </>
  );
};

export default Contact;
