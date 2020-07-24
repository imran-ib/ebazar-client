import React from "react";
import { AtomSpinner } from "react-epic-spinners";
import styled from "styled-components";

const SpinnerStyles = styled.div`
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface Props {}

const Spinner = (props: Props) => {
  return (
    <SpinnerStyles>
      <AtomSpinner
        style={{ width: "100px", margin: "0 auto" }}
        color="#ff3535"
      />
    </SpinnerStyles>
  );
};

export default Spinner;
