import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import office from './images/office.png'
import './contact10.css';

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    Reach out to us for any inquiries related to import and export services. Our team at Exylin Trade is ready to assist you.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text20">Exylin Trade - Head Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">T-329 , ABC-1 , Mota varacha , Surat</span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://www.google.com/maps?q=T-329+ABC-1+Mota+Varachha+Surat"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact10.defaultProps = {
  content1: undefined,
  location1ImageSrc: office ,
  location1Description: undefined,
  location1ImageAlt: 'Exylin Trade Headquarters',
  heading1: undefined,
  location1: undefined,
};

Contact10.propTypes = {
  content1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location1: PropTypes.element,
};

export default Contact10;
