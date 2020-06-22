import React, { useState } from "react";
import useForm from "react-hook-form";
import StarRatingEditAble from "./StarRatingEditAble";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { toast } from "react-toastify";
import { GET_ITEM_REVIEWS } from "../ReviewProduct";
import { GET_SINGLE_ITEM } from "../../SingleItemQuery";
import Spinner from "react-bootstrap/Spinner";
const CREATE_ITEM_REVIEW = gql`
  mutation($rating: Float!, $text: String!, $itemID: ID!) {
    createReview(rating: $rating, text: $text, itemID: $itemID) {
      id
      text
      rating
    }
  }
`;

const RatingForm = ({ id }) => {
  const [createReview, { loading, error }] = useMutation(CREATE_ITEM_REVIEW, {
    refetchQueries: [
      { query: GET_ITEM_REVIEWS, variables: { id: id } },
      { query: GET_SINGLE_ITEM, variables: { id: id } }
    ]
  });
  const [rating, setrating] = useState(1);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const res = createReview({
      variables: {
        text: data.text,
        itemID: id,
        rating: rating
      }
    }).catch(err => toast.error(err.message));
  };

  return (
    <>
      <StarRatingEditAble rating={rating} setrating={setrating} />
      <div className="ratting-form">
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-12">
              <div className="rating-form-style mb-20">
                <label>
                  Your review <span>*</span>
                </label>
                <textarea
                  ref={register}
                  name="text"
                  defaultValue="This Product Is Awesome"
                />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-submit">
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={loading}
                >
                  {loading && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )}{" "}
                  Submit{loading ? "ing..., Please Wait" : ""}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RatingForm;
