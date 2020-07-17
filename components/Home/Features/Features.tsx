import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Features = () => {
  return (
    <div className="feature-area">
      <div className="container">
        <div className="row">
          <Slide left duration={1000}>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="single-feature mb-40">
                <div className="feature-icon">
                  <img src="/static/img/icon-img/free-shipping.png" alt="" />
                </div>
                <div className="feature-content">
                  <h4>Free Shipping</h4>
                  <p>
                    Most product are free <br />
                    shipping.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Fade duration={3000}>
            <div className="col-xl-5 col-lg-4 col-md-4">
              <div className="single-feature mb-40 pl-50">
                <div className="feature-icon">
                  <img src="/static/img/icon-img/support.png" alt="" />
                </div>
                <div className="feature-content">
                  <h4>Customer Support</h4>
                  <p>24x7 Customer Support</p>
                </div>
              </div>
            </div>
          </Fade>
          <Slide right duration={1000}>
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="single-feature mb-40">
                <div className="feature-icon">
                  <img src="/static/img/icon-img/security.png" alt="" />
                </div>
                <div className="feature-content">
                  <h4>Secure Payment</h4>
                  <p>
                    Most Secure Payment <br />
                    for customer.
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Features;
