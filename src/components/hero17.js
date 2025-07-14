import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import "./hero17.css";

const Hero17 = (props) => {
  useEffect(() => {
    const verticalLine = document.querySelector(".vertical-line");
    const steps = Array.from(document.querySelectorAll(".trade-step"));

    const onScroll = () => {
      if (!steps.length || !verticalLine) return;

      const firstStepTop =
        steps[0].getBoundingClientRect().top + window.scrollY;
      const lastStepRect = steps[steps.length - 1].getBoundingClientRect();
      const lastStepBottom =
        lastStepRect.top + window.scrollY + lastStepRect.height;
      const scrollTop = window.scrollY + window.innerHeight / 2;

      // Animate dotted line
      if (scrollTop > firstStepTop) {
        const newHeight = Math.min(
          scrollTop - firstStepTop,
          lastStepBottom - firstStepTop
        );
        verticalLine.style.height = `${newHeight}px`;
      } else {
        verticalLine.style.height = "0px";
      }

      // Animate each step (box)
      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.8 && rect.bottom > 100;

        if (isVisible) {
          step.classList.add("visible-step");
        } else {
          step.classList.remove("visible-step");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    setTimeout(onScroll, 300); // trigger once after mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7">Welcome to Exylin Trade</span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Your trusted partner for import and export services in India
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6">Explore Our Services</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Contact Us</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <section className="trade-process-section">
        <h2 className="trade-process-title">Our Global Trade Process</h2>
        <div className="trade-process-wrapper" id="snake-line">
          <div className="vertical-line"></div>

          {[1, 2, 3, 4].map((step) => (
            <div
              className={`trade-step ${step % 2 === 0 ? "right" : "left"}`}
              id={`step-${step}`}
            >
              <div className="trade-step-card">
                <h3>
                  Step {step}:{" "}
                  {
                    [
                      "Market Research",
                      "Supplier Sourcing",
                      "Compliance",
                      "Shipping & Delivery",
                    ][step - 1]
                  }
                </h3>
                <p>
                  {
                    [
                      "We identify your ideal market and map global trends.",
                      "We connect you to verified suppliers across industries.",
                      "Handling documentation and customs with full compliance.",
                      "Smart logistics with real-time tracking to your destination.",
                    ][step - 1]
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

Hero17.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
};

export default Hero17;
