import React, { useState } from "react";
import Spinner from "components/Utils/Spinner/Spinner";
import StepWizard from "react-step-wizard";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StetpFive from "./Steps/StetpFive";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
}

const UpdateItem: React.FC<Props> = ({ item }) => {
  const [Disabled, setDisabled] = useState(true);
  const [Title, setTitle] = useState(item?.title);
  const [Description, setDescription] = useState(item.description);
  const [Overview, setOverview] = useState(item.overview);
  const [Brand, setBrand] = useState(item.brand);
  const [Weight, setWeight] = useState(item.weight);
  const [Dimensions, setDimensions] = useState(item.dimensions);
  const [Materials, setMaterials] = useState(item.materials);
  const [Video, setVideo] = useState(item.videoLink);
  const [Other, setOther] = useState(item.otherInfo);
  const [Price, setPrice] = useState(item.price);
  const [DefaultPrice, setDefaultPrice] = useState(item.beforeDiscountPrice);
  const [Stock, setStock] = useState(item.stock);
  const [tags, setTags] = useState(item.tags.map((tag) => tag.text));
  const [category, setCategory] = useState(
    item.catagory.map((category) => category.text)
  );

  const [Color, setColor] = useState(item.colors.map((color) => color.text));
  const [Features, setFeatures] = useState(
    item.OtherFeatures.map((feature) => feature)
  );

  const [images, setImages] = useState(item.images.map((img) => img));
  const [eagerImages, seteagerImages] = useState(
    item.eagerImages.map((img) => img)
  );

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
    Price: DefaultPrice,
    Stock,
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
          item={item}
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
        <StetpFive id={item.id} data={data} Disabled={Disabled} />
      </StepWizard>
    </div>
  );
};

export default UpdateItem;
