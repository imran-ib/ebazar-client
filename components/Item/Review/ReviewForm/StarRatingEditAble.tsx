import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import Styles from "styled-components";
import media from "styled-media-query";

const StarStyles = Styles.div`
overflow-x: hidden;
.Review-text-center {
  float: right;
  ${media.lessThan("small")`
  text-align: center;
    `}
}
`;

interface Props {
  rating?: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}
const StarRatingEditAble: React.FC<Props> = (props) => {
  const [localRating, setLocalRating] = useState(1);

  const onStarClick = (nextValue: any, prevValue: any, name: any) => {
    setLocalRating(nextValue);
    props.setRating(localRating);
  };
  // const onClickHalfStar = (
  //   nextValue: any,
  //   prevValue: any,
  //   name: any,
  // ) => {
  //   const xPos =
  //     (e.pageX - e.currentTarget.getBoundingClientRect().left) /
  //     e.currentTarget.offsetWidth;

  //   if (xPos <= 0.5) {
  //     nextValue -= 0.5;
  //   }

  //   console.log(
  //     "name: %s, nextValue: %s, prevValue: %s",
  //     name,
  //     nextValue,
  //     prevValue
  //   );
  //   // console.log(e);

  // };

  return (
    <StarStyles>
      <h3 className="Review-text-center">
        Rate This Item :{" "}
        <span>
          {" "}
          <p>
            Your Rating : <strong> {localRating}/5</strong>
          </p>
        </span>
      </h3>
      <div style={{ fontSize: 24 }}>
        <StarRatingComponent
          name="ebazar"
          starColor="#ffb400"
          emptyStarColor="#ffb400"
          value={localRating}
          onStarClick={(nextValue, prevValue, name) =>
            onStarClick(nextValue, prevValue, name)
          }
          renderStarIcon={(index, value) => {
            return (
              <span>
                <i className={index <= value ? "fas fa-star" : "far fa-star"} />
              </span>
            );
          }}
          renderStarIconHalf={() => {
            return (
              <span>
                <span style={{ position: "absolute" }}>
                  <i className="far fa-star" />
                </span>
                <span>
                  <i className="fas fa-star-half" />
                </span>
              </span>
            );
          }}
        />
      </div>
    </StarStyles>
  );
};

export default StarRatingEditAble;
