import React from "react";
import GetInTouch from "./GetInTouch";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <>
      <div className="contact-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <GetInTouch />
            </div>
            <div className="col-lg-5 col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
        <ContactMap />
      </div>
    </>
  );
};

export default Contact;
