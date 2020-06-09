import React, { useState } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from "mdbreact";
import { useRouter } from "next/router";

// This Modal is being called in user forget password if there is no error  no loading and it is called
// There is link or button linked to it (see the state is true)

interface Props {
  email: string;
  modal: string;
}

const InfoModel: React.FC<Props> = (props) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);
  return (
    <MDBContainer>
      {/* 
      //@ts-ignore */}
      <MDBModal
        isOpen={toggle}
        frame
        position="top"
        animation="right"
        autoFocus={true}
      >
        <MDBModalBody className="text-center">
          An Email Has been Sent to <strong>{props.email}</strong>. You Will
          find a password reset link in that email.
          <MDBBtn
            color="info"
            onClick={() => {
              setToggle(!toggle);
              router.back();
            }}
          >
            Close
          </MDBBtn>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default InfoModel;
