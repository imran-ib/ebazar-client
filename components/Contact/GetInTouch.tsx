import React from "react";

const GetInTouch = () => {
  return (
    <div className="contact-info-area">
      <h2>Get In Touch</h2>
      <p>This is a demo project. You can get in touch with me via follwing </p>
      <div className="contact-info-wrap">
        <div className="single-contact-info">
          <div className="contact-info-icon">
            <i className="sli sli-location-pin" />
          </div>
          <div className="contact-info-content">
            <p>Al Ghat Riyadh KSA</p>
          </div>
        </div>
        <div className="single-contact-info">
          <div className="contact-info-icon">
            <i className="sli sli-envelope" />
          </div>
          <div className="contact-info-content">
            <p>
              <a href="#">imran.ib@live.com</a> /{" "}
              <a href="#">iib.webdevs@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="single-contact-info">
          <div className="contact-info-icon">
            <i className="sli sli-screen-smartphone" />
          </div>
          <div className="contact-info-content">
            <p>+966 53 8486319 / +92 334 7303358</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
