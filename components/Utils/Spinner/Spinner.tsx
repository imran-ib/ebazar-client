import React from "react";

interface Props {}

const Spinner = (props: Props) => {
  return (
    <div
      style={{ marginTop: "30vh" }}
      className="d-flex justify-content-center align-content-center"
    >
      <div
        style={{ width: "3rem", height: "3rem" }}
        className="spinner-border "
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
