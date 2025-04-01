import React from "react";

const ShippingPolicy = () => {
  return (
    <>
      <div className="shipping-policy-container">
        <h1 className="shipping-policy-title">Shipping Policy</h1>
        <p className="shipping-policy-text">
          This Shipping Policy outlines the shipping methods, costs, and
          delivery times for orders placed on our website.
        </p>
        <h2 className="shipping-policy-subtitle">1. Shipping Methods</h2>
        <p className="shipping-policy-text">
          We offer various shipping methods to meet your needs, including
          standard and expedited shipping options.
        </p>
        <h2 className="shipping-policy-subtitle">2. Shipping Costs</h2>
        <p className="shipping-policy-text">
          Shipping costs are calculated based on the weight of your order and
          the shipping method selected at checkout.
        </p>
        <h2 className="shipping-policy-subtitle">3. Delivery Times</h2>
        <p className="shipping-policy-text">
          Delivery times vary based on the shipping method chosen and your
          location. Please refer to the estimated delivery times provided at
          checkout.
        </p>
        <h2 className="shipping-policy-subtitle">4. Order Tracking</h2>
        <p className="shipping-policy-text">
          Once your order has shipped, you will receive a tracking number via
          email to monitor the status of your shipment.
        </p>
        <h2 className="shipping-policy-subtitle">5. International Shipping</h2>
        <p className="shipping-policy-text">
          We offer international shipping to select countries. Additional fees
          and longer delivery times may apply.
        </p>
        <h2 className="shipping-policy-subtitle">
          6. Changes to This Shipping Policy
        </h2>
        <p className="shipping-policy-text">
          We may update this Shipping Policy from time to time. We will notify
          you about significant changes by posting a notice on our site.
        </p>
        <h2 className="shipping-policy-subtitle">7. Contact Information</h2>
        <p className="shipping-policy-text">
          If you have any questions about this Shipping Policy, please contact
          us at info@tropifresh.com.
        </p>
      </div>
      <hr className="shipping-policy-line" />
    </>
  );
};

export default ShippingPolicy;
