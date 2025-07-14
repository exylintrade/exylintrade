import React, { useState } from "react";
import "./faqs.css";

const faqItems = [
  {
    question: "What services does Exylin Trade offer?",
    answer:
      "We provide full-scale import and export services, including logistics, compliance, sourcing, and quality assurance.",
  },
  {
    question: "Do you operate globally?",
    answer:
      "Yes, we support trade across Asia, Europe, North America, and more — with trusted partners in each region.",
  },
  {
    question: "How do I get started?",
    answer:
      "Click on 'Contact Us' or 'Explore Services' and our team will guide you through the process step by step.",
  },
  {
    question: "Can I request specific products?",
    answer:
      "Absolutely! Let us know your needs and we’ll match you with the right suppliers or sourcing options.",
  },
  {
    question: "Is documentation handled by your team?",
    answer:
      "Yes. We take care of all documentation, customs clearance, and compliance work for hassle-free trade.",
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
