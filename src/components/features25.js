import React, { useState, Fragment } from "react";

import PropTypes from "prop-types";

import "./features25.css";
import Img1 from "./images/4.png";
import Img2 from "./images/5.png";
import Img3 from "./images/6.png";

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                <span className="features25-text4">
                  End-to-End Import/Export Services
                </span>
              </h2>
              <span className="thq-body-small">
                <span className="features25-text2">
                  From identifying demand to final delivery, we handle every
                  aspect of your international trade — sourcing, documentation,
                  logistics, and compliance — all tailored for your success.
                </span>
              </span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                <span className="features25-text3">Global Market Access</span>
              </h2>
              <span className="thq-body-small">
                <span className="features25-text5">
                  Tap into international markets with confidence. We bridge the
                  gap between Indian exporters and global buyers, ensuring
                  trust, transparency, and timely shipments every time.
                </span>
              </span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                <span className="features25-text6">
                  Reliable Trade, Guaranteed Quality
                </span>
              </h2>
              <span className="thq-body-small">
                <span className="features25-text1">
                  We don’t just move goods — we deliver trust. With strict
                  quality control and full compliance handling, your business is
                  in safe hands from factory floor to port delivery.
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  );
};

Features25.defaultProps = {
  feature1ImgAlt: "End-to-End Import/Export Services",
  feature1ImgSrc: Img1, // ✅ Correct path
  feature2ImgAlt: "Global Market Access",
  feature2ImgSrc: Img2, // ✅ Your own second image
  feature3ImgAlt: "Reliable Trade, Guaranteed Quality",
  feature3ImgSrc: Img3, // ✅ Your own third image
  feature1Title: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  feature3Description: undefined,
};

Features25.propTypes = {
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
};

export default Features25;
