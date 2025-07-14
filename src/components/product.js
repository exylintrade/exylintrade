import React, { useState } from "react";
import "./product.css";

const ProductAdvisorModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleNext = (value) => {
    setAnswers((prev) => ({ ...prev, [`q${step}`]: value }));
    setStep((prev) => prev + 1);
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <>
          <h3>What type of trade are you interested in?</h3>
          <div className="modal-btn-group">
            <button onClick={() => handleNext("Import")}>Import</button>
            <button onClick={() => handleNext("Export")}>Export</button>
            <button onClick={() => handleNext("Both")}>Both</button>
          </div>
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <h3>Which product category best fits your needs?</h3>
          <div className="modal-btn-group">
            <button onClick={() => handleNext("Consumer Goods")}>
              Consumer Goods
            </button>
            <button onClick={() => handleNext("Industrial Goods")}>
              Industrial Goods
            </button>
            <button onClick={() => handleNext("Raw Materials")}>
              Raw Materials
            </button>
            <button onClick={() => handleNext("Not Sure")}>Not Sure</button>
          </div>
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <h3>Where are you trading to or from?</h3>
          <div className="modal-btn-group">
            <button onClick={() => handleNext("Worldwide")}>Worldwide</button>
            <button onClick={() => handleNext("Specific Regions")}>
              Specific Regions
            </button>
            <button onClick={() => handleNext("Not Decided Yet")}>
              Not Decided Yet
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h3>✅ Your Trade Preferences</h3>
          <p>
            You’re looking to <strong>{answers.q1}</strong> in the{" "}
            <strong>{answers.q2}</strong> category with a focus on{" "}
            <strong>{answers.q3}</strong>.
          </p>
          <p className="modal-recommendation">
            Based on this, we recommend exploring our services or scheduling a
            call with our team.
            <br />
            We're here to support you with global trade solutions tailored to
            your goals.
          </p>
          <div className="modal-btn-group">
            <a href="/services" className="modal-link-btn">
              Explore Services
            </a>
            <button onClick={onClose}>Close</button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">{renderStep()}</div>
    </div>
  );
};

export default ProductAdvisorModal;
