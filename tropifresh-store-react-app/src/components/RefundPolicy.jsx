import React from "react";

const RefundPolicy = () => {
  return (
    <>
      <div className="refund-policy-container">
        <h1 className="refund-policy-title">Refund Policy</h1>
        <p className="refund-policy-text">
          This Refund Policy outlines the conditions under which refunds are
          granted for purchases made on our website.
        </p>
        <h2 className="refund-policy-subtitle">1. Eligibility for Refunds</h2>
        <p className="refund-policy-text">
          To be eligible for a refund, you must return the item within 30 days
          of receiving it. The item must be unused and in the same condition
          that you received it.
        </p>
        <h2 className="refund-policy-subtitle">
          2. Process for Requesting a Refund
        </h2>
        <p className="refund-policy-text">
          To request a refund, please contact our customer service team at
          info@tropifresh.com with your order number and reason for the refund.
        </p>
        <h2 className="refund-policy-subtitle">3. Timeframe for Refunds</h2>
        <p className="refund-policy-text">
          Once your return is received and inspected, we will send you an email
          to notify you of the approval or rejection of your refund. If
          approved, your refund will be processed within a certain number of
          days.
        </p>
        <h2 className="refund-policy-subtitle">4. Non-refundable Items</h2>
        <p className="refund-policy-text">
          Certain items are non-refundable, including gift cards and
          downloadable software products.
        </p>
        <h2 className="refund-policy-subtitle">
          5. Changes to This Refund Policy
        </h2>
        <p className="refund-policy-text">
          We may update this Refund Policy from time to time. We will notify you
          about significant changes by posting a notice on our site.
        </p>
        <h2 className="refund-policy-subtitle">6. Contact Information</h2>
        <p className="refund-policy-text">
          If you have any questions about this Refund Policy, please contact us
          at info@tropifresh.com.
        </p>
      </div>
      <hr className="refund-policy-line" />
    </>
  );
};

export default RefundPolicy;
