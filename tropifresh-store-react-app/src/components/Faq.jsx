import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows you to return items within 30 days of receipt for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary based on your location and the shipping method selected at checkout. Typically, it takes 3-5 business days for domestic orders.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive a tracking number via email to monitor the status of your shipment.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to select countries. Additional fees and longer delivery times may apply.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach our customer service team at info@tropifresh.com for any inquiries or assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <h2
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              // style={{
              //   display: "flex",
              //   justifyContent: "space-between",
              //   cursor: "pointer",
              // }}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </h2>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <hr className="faq-line" />
    </>
  );
};

export default FAQ;
