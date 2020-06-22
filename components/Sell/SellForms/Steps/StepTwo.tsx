import React, { useEffect } from "react";
import styled from "styled-components";
import TagsComponent from "./Tags/Tags";
import CategoryComponent from "./Tags/Category";
import ColorComponent from "./Tags/Colors";
import FeaturesComponent from "./Tags/Features";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

const TagStyles = styled.div`
  .input-tag {
    background: white;
    border: 1px solid #d6d6d6;
    border-radius: 2px;
    display: flex;
    flex-wrap: wrap;
    padding: 40px;
  }

  .input-tag input {
    border: none;
    width: 100%;
  }

  .input-tag__tags {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 20%;
  }

  .input-tag__tags li {
    align-items: center;
    background: #ffd700;
    border-radius: 2px;
    color: black;
    display: flex;
    font-weight: 300;
    list-style: none;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px 10px;
  }

  .input-tag__tags li button {
    align-items: center;
    appearance: none;
    background: #333333;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-size: 12px;
    height: 15px;
    justify-content: center;
    line-height: 0;
    margin-left: 8px;
    padding: 0;
    transform: rotate(45deg);
    width: 15px;
  }

  .input-tag__tags li.input-tag__tags__input {
    background: none;
    flex-grow: 1;
    padding: 0;
  }
`;

interface Props {
  nextStep?: any;
  previousStep?: any;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
  category: string[];
  Color: string[];
  setColor: React.Dispatch<React.SetStateAction<string[]>>;
  Features: string[];
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  Disabled: boolean;
}

const StepTwo: React.FC<Props> = (props) => {
  const {
    setTags,
    setCategory,
    tags,
    category,
    Color,
    setColor,
    Features,
    setFeatures,
  } = props;

  const runValidation = () => {
    if (tags.length < 1) {
      toast.error("Please Provide At least One Tag");
    } else if (category.length < 1) {
      toast.error("Please Provide At least One Category");
    } else if (Color.length < 1) {
      toast.error("You Must Provide At least One Color");
    } else {
      props.nextStep();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <TagStyles>
        <div className="Info ">
          <span>
            <span className="step">Step Two</span> <br />
            <span className="step-text">
              Add Tags, Categories , Colors and Features To Your Product
            </span>
          </span>
        </div>
        <br />

        <TagsComponent tags={tags} setTags={setTags} />
        <hr />
        <CategoryComponent category={category} setCategory={setCategory} />
        <hr />
        <ColorComponent Color={Color} setColor={setColor} />
        <hr />
        <FeaturesComponent Features={Features} setFeatures={setFeatures} />
        <hr />
        <button
          style={{ background: "#ff3331", color: "#fff" }}
          className="btn"
          onClick={props.previousStep}
        >
          prev
        </button>
        <button
          style={{ background: "#ff3331", color: "#fff" }}
          type="button"
          className="btn  float-right"
          onClick={runValidation}
        >
          Next
        </button>
      </TagStyles>
    </Container>
  );
};

export default StepTwo;
