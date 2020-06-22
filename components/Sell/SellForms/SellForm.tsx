import React, { useState } from "react";
import Spinner from "components/Utils/Spinner/Spinner";
import StepWizard from "react-step-wizard";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StetpFive from "./Steps/StetpFive";

const SellForm = () => {
  const [Disabled, setDisabled] = useState(true);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Overview, setOverview] = useState("");
  const [Brand, setBrand] = useState("");
  const [Weight, setWeight] = useState("");
  const [Dimensions, setDimensions] = useState("");
  const [Materials, setMaterials] = useState("");
  const [Video, setVideo] = useState("");
  const [Other, setOther] = useState("");
  const [Price, setPrice] = useState("");
  const [DefaultPrice, setDefaultPrice] = useState("");
  const [Stock, setStock] = useState("");
  const [tags, setTags] = useState(["Add Tags"]);
  const [category, setCategory] = useState(["Add Categories"]);
  const [Color, setColor] = useState(["Add Colors"]);
  const [Features, setFeatures] = useState(["Add Features"]);
  const [images, setImages] = useState([""]);
  const [eagerImages, seteagerImages] = useState([""]);

  const data = {
    Title,
    Description,
    Overview,
    Brand,
    Weight,
    Dimensions,
    Materials,
    Video,
    Other,
    Price: parseInt(Price),
    DefaultPrice: parseInt(DefaultPrice),
    Stock: parseInt(Stock),
    tags,
    category,
    Color,
    Features,
    images,
    eagerImages,
  };

  const loading = false;
  if (loading) return <Spinner />;

  return (
    <div>
      <div className="card-heading text-center">
        <h2 className="main-heading">Create Item Here</h2>
      </div>

      <StepWizard
        onStepChange={() => {
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }, 800);
        }}
      >
        <StepOne
          Title={Title}
          setTitle={setTitle}
          Brand={Brand}
          setBrand={setBrand}
          Weight={Weight}
          setWeight={setWeight}
          Dimensions={Dimensions}
          setDimensions={setDimensions}
          Materials={Materials}
          setMaterials={setMaterials}
          Video={Video}
          setVideo={setVideo}
          Other={Other}
          setOther={setOther}
          Price={Price}
          setPrice={setPrice}
          DefaultPrice={DefaultPrice}
          setDefaultPrice={setDefaultPrice}
          Stock={Stock}
          setStock={setStock}
          Disabled={Disabled}
          setDisabled={setDisabled}
        />
        <StepTwo
          tags={tags}
          setTags={setTags}
          category={category}
          setCategory={setCategory}
          Color={Color}
          setColor={setColor}
          Features={Features}
          setFeatures={setFeatures}
          Disabled={Disabled}
        />
        <StepThree
          images={images}
          setImages={setImages}
          eagerImages={eagerImages}
          seteagerImages={seteagerImages}
          tags={tags}
          Disabled={Disabled}
        />

        <StepFour
          Description={Description}
          setDescription={setDescription}
          Overview={Overview}
          setOverview={setOverview}
          Disabled={Disabled}
        />
        {/* 
          //@ts-ignore */}
        <StetpFive data={data} Disabled={Disabled} />
      </StepWizard>
    </div>
  );
};

export default SellForm;
