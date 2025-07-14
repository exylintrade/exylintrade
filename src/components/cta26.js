import React, { Fragment } from "react";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";



import "./cta26.css";

const CTA26 = (props) => {
  const history = useHistory();

  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text4">Explore Our Services</span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        Discover our wide range of import and export services in
                        electronics, machinery, textiles, and raw materials.
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                  onClick={() => history.push("/services")}
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text6">View Services</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CTA26.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
};

CTA26.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
};

export default CTA26;
