import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from "mdbreact";
import Router from "next/router";

// This Modal is being called in SellerRegistration file if there is no error  no loading and it is called
// There is link or button linked to it (see the state is true)

const ModalPage = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <MDBContainer>
      {/* 
      //@ts-ignore */}
      <MDBModal isOpen={toggle} frame position="top">
        <MDBModalBody className="text-center">
          Thank you for registering on <strong>eBazar</strong>. <br /> To
          complete your registration, please check your <strong>email</strong>{" "}
          for account activation Link. <br /> Until you{" "}
          <strong>activate your account</strong> you may not be able to sell
          items on this site.
          <MDBBtn
            color="info"
            onClick={() => {
              setToggle(!toggle);
              Router.push("/seller/login");
            }}
          >
            Close
          </MDBBtn>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default ModalPage;
