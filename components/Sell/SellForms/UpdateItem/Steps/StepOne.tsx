import React from "react";
import { MDBInput } from "mdbreact";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Item } from "generated/graphql";

const StepTwoStyles = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

interface Props {
  item: Item;
  hashKey?: any;
  nextStep?: any;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBrand: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setWeight: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setDimensions: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
  setMaterials: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setVideo: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setOther: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setDefaultPrice: React.Dispatch<React.SetStateAction<number>>;
  setStock: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  Title?: string | null | any;
  Brand?: string | null | any;
  Weight?: string | null | any;
  Dimensions?: string | null | any;
  Materials?: string | null | any;
  Video?: string | null | any;
  Other?: string | null | any;
  Price?: string | null | any | number;
  DefaultPrice?: string | null | any | number;
  Stock?: string | null | any | number;
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
        label="Product Name *"
        valueDefault={Title}
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
        label="Brand Name"
        valueDefault={Brand}
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
        label="Product Weight"
        valueDefault={Weight}
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
        label="e.g 10 x 10  or sm , xl , Small , Large etc , Separated with comma (,) "
        valueDefault={Dimensions}
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
        label="Product Material"
        valueDefault={Materials}
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
        label="If You Have Video About Your product Put Link Here"
        valueDefault={Video}
      />

      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setPrice(parseInt(e.currentTarget.value))
        }
        icon="dollar-sign"
        required={true}
        name="Price"
        type="number"
        label="Price in Cents *"
        valueDefault={Price}
      />
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setDefaultPrice(parseInt(e.currentTarget.value))
        }
        icon="dollar-sign"
        required={true}
        name="DefaultPrice,"
        type="number"
        label="Price Before Discount *"
        valueDefault={DefaultPrice}
      />
      <MDBInput
        className="p-3"
        size="lg"
        outline
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setStock(parseInt(e.currentTarget.value))
        }
        icon="store-alt"
        required={true}
        name="Stock"
        type="text"
        label="How Much Stock *"
        valueDefault={Stock}
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
        label="Features"
        valueDefault={Other}
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
