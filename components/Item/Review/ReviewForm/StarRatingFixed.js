import React from "react";
import StarRatingComponent from "react-star-rating-component";

const StarRatingFixed = ({ stars }) => (
  <StarRatingComponent
    name="ebazar"
    starColor="#ffb400"
    emptyStarColor="#ffb400"
    value={stars}
    editing={false}
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
);

export default StarRatingFixed;
