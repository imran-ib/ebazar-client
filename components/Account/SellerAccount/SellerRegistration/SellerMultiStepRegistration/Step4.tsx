import React, { useEffect } from "react";
import { MDBInput } from "mdbreact";

interface Props {
  Brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  previousStep?: any;
  SubmitData: () => void;
}

function Step4(props: Props) {
  useEffect(() => {
    typeof window !== "undefined" &&
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <React.Fragment>
      <MDBInput
        icon="store"
        value={props.Brand}
        name="Brand"
        type="text"
        label="You can Add Multiple Brands With Comma Separated Values"
        onChange={(e) => props.setBrand(e.currentTarget.value)}
      />
      <button onClick={props.previousStep} className="btn">
        prev
      </button>

      <button
        onClick={props.SubmitData}
        type="submit"
        className="btn btn-outline-success  float-right "
      >
        Register
      </button>
    </React.Fragment>
  );
}

export default Step4;
