import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import ProductModelContent from "./ProductModelContent";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
  setToggle: any;
  toggle: any;
}
const ModalComponent: React.FC<Props> = ({ toggle, setToggle, item }) => {
  return (
    <MDBContainer>
      {/* 
      //@ts-ignore */}
      <MDBModal isOpen={toggle} toggle={() => setToggle(!toggle)} size="fluid">
        <MDBModalHeader toggle={() => setToggle(!toggle)}></MDBModalHeader>
        <MDBModalBody>
          <ProductModelContent item={item} />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={() => setToggle(!toggle)}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default ModalComponent;
