import React from "react";
import { MDBInput } from "mdbreact";
import styled from "styled-components";
import { toast } from "react-toastify";

const StepTwoStyles = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

interface Props {
  hashKey?: any;
  nextStep?: any;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  setWeight: React.Dispatch<React.SetStateAction<string>>;
  setDimensions: React.Dispatch<React.SetStateAction<string>>;
  setMaterials: React.Dispatch<React.SetStateAction<string>>;
  setVideo: React.Dispatch<React.SetStateAction<string>>;
  setOther: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  setDefaultPrice: React.Dispatch<React.SetStateAction<string>>;
  setStock: React.Dispatch<React.SetStateAction<string>>;
  Title: string;
  Brand: string;
  Weight: string;
  Dimensions: string;
  Materials: string;
  Video: string;
  Other: string;
  Price: string;
  DefaultPrice: string;
  Stock: string;
  Disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const StepOne = (props: Props) => {
  const {
    nextStep,
    setTitle,
    setBrand,
    setWeight,
    setDimensions,
    setMaterials,
    setVideo,
    setOther,
    setPrice,
    setDefaultPrice,
    setStock,
    Title,
    Brand,
    Weight,
    Dimensions,
    Materials,
    Video,
    Other,
    Price,
    DefaultPrice,
    Stock,
  } = props;

  const OnTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const runValidation = () => {
    if (Title !== "" && Price !== "" && DefaultPrice !== "" && Stock !== "") {
      nextStep();
    } else if (Title === "") {
      toast.error("Title is Required");
    } else if (Price === "") {
      toast.error("Price is Required");
    } else if (DefaultPrice === "") {
      toast.error("Discount Price is Required");
    } else if (Stock === "") {
      toast.error("Stock  is Required");
    } else {
      nextStep();
    }
  };

  return (
    <StepTwoStyles>
      <div className="Info ml-5">
        <span>
          <span className="step">Step One</span> <br />
          <small className="step-text">
            Basic Information About Your Item <br />
            <small className=" ml-3 text-info">(Comma Seperated Fields)</small>
          </small>
        </span>
      </div>
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e) => OnTitleChange(e)}
        icon="signature"
        required={true}
        name="name"
        type="text"
        value={Title}
        label="Product Name *"
      />

      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setBrand(e.currentTarget.value)
        }
        icon="chess-pawn"
        required={true}
        name="Brand"
        type="text"
        value={Brand}
        label="Brand Name"
      />

      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setWeight(e.currentTarget.value)
        }
        icon="weight"
        required={true}
        name="Weight"
        type="text"
        value={Weight}
        label="Product Weight"
      />

      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setDimensions(e.currentTarget.value)
        }
        icon="expand"
        required={true}
        name="Dimensions"
        type="text"
        value={Dimensions}
        label="e.g 10 x 10  or sm , xl , Small , Large etc , Separated with comma (,) "
      />

      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setMaterials(e.currentTarget.value)
        }
        icon="hard-hat"
        required={true}
        name="Materials"
        type="text"
        value={Materials}
        label="Product Material"
      />

      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setVideo(e.currentTarget.value)
        }
        icon="video"
        required={true}
        name="Video"
        type="text"
        value={Video}
        label="If You Have Video About Your product Put Link Here"
      />

      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setPrice(e.currentTarget.value)
        }
        icon="dollar-sign"
        required={true}
        name="Price"
        type="number"
        value={Price}
        label="Price in Cents *"
      />
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setDefaultPrice(e.currentTarget.value)
        }
        icon="dollar-sign"
        required={true}
        name="DefaultPrice,"
        type="number"
        value={DefaultPrice}
        label="Price Before Discount *"
      />
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setStock(e.currentTarget.value)
        }
        icon="store-alt"
        required={true}
        name="Stock"
        type="text"
        value={Stock}
        label="How Much Stock *"
      />
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setOther(e.currentTarget.value)
        }
        icon="plus"
        required={true}
        name="Other"
        type="text"
        value={Other}
        label="Features"
      />

      <button
        style={{ background: "#ff3331", color: "#fff" }}
        className="btn float-right"
        onClick={runValidation}
      >
        Next
      </button>
    </StepTwoStyles>
  );
};

export default StepOne;
