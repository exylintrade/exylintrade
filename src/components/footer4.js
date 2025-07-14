import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./footer4.css";

const Footer4 = (props) => {
  const { theme = "light" } = props;
  return (
    <footer
      className={`footer4-footer7 thq-section-padding footer4 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <Link to="/" className="thq-body-small">
              {props.link1 ?? <span className="footer4-text16">Home</span>}
            </Link>
            <Link to="/services" className="thq-body-small">
              {props.link2 ?? <span className="footer4-text18">Services</span>}
            </Link>
            <Link to="/about" className="thq-body-small">
              {props.link3 ?? <span className="footer4-text15">About Us</span>}
            </Link>
            <Link to="/contact" className="thq-body-small">
              {props.link4 ?? (
                <span className="footer4-text19">Contact Us</span>
              )}
            </Link>
            <Link to="/faqs" className="thq-body-small">
              {props.link5 ?? <span className="footer4-text14">FAQs</span>}
            </Link>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2025 </span>
              <Link
                to="/copyright"
                className="thq-body-small footer4-copyright-link"
              >
                ExylinTrade
              </Link>
            </div>

            <div className="footer4-footer-links">
              <Link to="/privacy" className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <span className="footer4-text21">Privacy Policy</span>
                )}
              </Link>
              <Link to="/terms" className="thq-body-small">
                {props.termsLink ?? (
                  <span className="footer4-text17">Terms and Conditions</span>
                )}
              </Link>
              <Link to="/cookies" className="thq-body-small">
                {props.cookiesLink ?? (
                  <span className="footer4-text20">Cookies Policy</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer4.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: undefined,
  termsLink: undefined,
  link2: undefined,
  link4: undefined,
  logoAlt: "Exylin Trade Logo",
  cookiesLink: undefined,
  logoSrc: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
  privacyLink: undefined,
};

Footer4.propTypes = {
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
};

export default Footer4;
