import React from "react";
import StarRatingComponent from "react-star-rating-component";

interface Props {
  stars: number;
}

const StarRatingFixed: React.FC<Props> = ({ stars }) => (
  <StarRatingComponent
    name="ebazar"
    starColor="#ffb400"
    emptyStarColor="#ffb400"
    value={stars | 0}
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
