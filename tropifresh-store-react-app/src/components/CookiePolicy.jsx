import React from "react";

const CookiePolicy = () => {
  return (
    <>
      <div className="cookie-policy-container">
        <h1 className="cookie-policy-title">Cookie Policy</h1>
        <p className="cookie-policy-text">
          This Cookie Policy explains what cookies are, how we use cookies, how
          third-parties we may partner with may use cookies on the service, your
          choices regarding cookies, and further information about cookies.
        </p>
        <h2 className="cookie-policy-subtitle"> 1. What Are Cookies?</h2>
        <p className="cookie-policy-text">
          Cookies are small text files that are used to store small pieces of
          information. They are stored on your device when the website is loaded
          on your browser.
        </p>
        <h2 className="cookie-policy-subtitle">2. Types of Cookies We Use</h2>
        <p className="cookie-policy-text">
          We use both session and persistent cookies. Session cookies are
          temporary and are deleted when you close your browser. Persistent
          cookies remain on your device for a set period or until you delete
          them.
        </p>
        <h2 className="cookie-policy-subtitle">3. Purpose of Cookies</h2>
        <p className="cookie-policy-text">
          We use cookies to enhance your experience on our website, analyze
          traffic, and understand how our services are used.
        </p>
        <h2 className="cookie-policy-subtitle">
          4. Managing Cookie Preferences
        </h2>
        <p className="cookie-policy-text">
          You can manage your cookie preferences through your browser settings.
          You can choose to block cookies or delete them.
        </p>
        <h2 className="cookie-policy-subtitle">
          5. Changes to This Cookie Policy
        </h2>
        <p className="cookie-policy-text">
          We may update this Cookie Policy from time to time. We will notify you
          about significant changes by posting a notice on our site.
        </p>
        <h2 className="cookie-policy-subtitle">6. Contact Information</h2>
        <p className="cookie-policy-text">
          If you have any questions about this Cookie Policy, please contact us
          at info@tropifresh.com.
        </p>
      </div>
      <hr className="cookie-policy-line" />
    </>
  );
};

export default CookiePolicy;
