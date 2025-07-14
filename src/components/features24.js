import React, { useState, Fragment } from "react";

import PropTypes from "prop-types";

import "./features24.css";
import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title || (
                  <Fragment>
                    <span className="features24-text4">
                      Comprehensive Trade Solutions
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description || (
                  <Fragment>
                    <span>
                      From raw materials to finished goods, we handle the
                      sourcing, compliance, and logistics — so you can focus on
                      growth. Whether you’re importing or exporting, we deliver
                      value at every stage.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title || (
                  <Fragment>
                    <span className="features24-text6">
                      <span>Worldwide Reach, Local Expertise</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description || (
                  <Fragment>
                    <span className="features24-text3">
                      We connect your business to global markets with precision.
                      Our network of trusted suppliers and logistics partners
                      spans across continents — from Asia to Europe, Africa to
                      the Americas.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title || (
                  <Fragment>
                    <span className="features24-text2">
                      Unmatched Reliability & Quality
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description || (
                  <Fragment>
                    <span className="features24-text1">
                      Every product we move is backed by rigorous quality
                      checks, transparent documentation, and seamless
                      compliance. When you trade with us, you trade with
                      confidence.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Features24.defaultProps = {
  feature1ImgAlt: "Comprehensive Trade Solutions",
  feature1ImgSrc: Img1, // ✅ Correct path
  feature2ImgAlt: "Worldwide Reach, Local Expertise",
  feature2ImgSrc: Img2, // ✅ Your own second image
  feature3ImgAlt: "Unmatched Reliability & Quality",
  feature3ImgSrc: Img3, // ✅ Your own third image
  feature1Title: undefined,
  feature2Title: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature2Description: undefined,
  feature3Description: undefined,
};

Features24.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
};

export default Features24;
