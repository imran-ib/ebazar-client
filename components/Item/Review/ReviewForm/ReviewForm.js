import React from "react";
import RatingForm from "./RatingForm";

const ReviewForm = ({ id }) => {
  return (
    <div className="ratting-form-wrapper">
      <span>Add a Review</span>
      <p>
        Your email address will not be published. Required fields are marked{" "}
        <span>*</span>
      </p>
      <RatingForm id={id} />
    </div>
  );
};

export default ReviewForm;
