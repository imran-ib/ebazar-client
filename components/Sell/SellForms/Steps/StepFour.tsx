import React from "react";
import { MDBInput } from "mdbreact";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";

interface Props {
  nextStep?: any;
  previousStep?: any;
  Description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  Overview: string;
  setOverview: React.Dispatch<React.SetStateAction<string>>;
  Disabled: boolean;
}

const StepFour = (props: Props) => {
  const { Description, setDescription, Overview, setOverview } = props;

  const runValidation = () => {
    if (Description === "") {
      toast.error(`Please Describe Your Item`);
    } else {
      props.nextStep();
    }
  };

  return (
    <Container>
      <div className="Info ml-5">
        <span>
          <span className="step">Step Four</span> <br />
          <span className="step-text ">Describe Your Item</span>
        </span>
      </div>
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setDescription(e.currentTarget.value)
        }
        icon="signature"
        required={true}
        name="Description"
        type="textarea"
        value={Description}
        label="Describe Your Item"
      />
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setOverview(e.currentTarget.value)
        }
        icon="signature"
        required={true}
        name="Overview"
        type="textarea"
        value={Overview}
        label="Overview Of Item "
      />
      <button
        style={{ background: "#ff3331", color: "#fff" }}
        className="btn"
        onClick={props.previousStep}
      >
        prev
      </button>

      <a
        style={{ background: "#ff3331", color: "#fff" }}
        className="btn float-right"
        onClick={runValidation}
      >
        Next
      </a>
    </Container>
  );
};

export default StepFour;
