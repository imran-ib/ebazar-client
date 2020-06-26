import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StarRatingEditAble from "./StarRatingEditAble";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import {
  ItemDocument,
  ItemReviewsDocument,
  useCreateReviewMutation,
} from "generated/graphql";

interface Props {
  id: string;
}

const RatingForm: React.FC<Props> = ({ id }) => {
  const [CreateItemReview, { loading, error }] = useCreateReviewMutation({
    refetchQueries: [
      { query: ItemReviewsDocument, variables: { itemId: id } },
      { query: ItemDocument, variables: { id: id } },
    ],
  });
  const [rating, setRating] = useState(1);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const res = CreateItemReview({
      variables: {
        itemId: id,
        text: data.text,
        rating: rating,
      },
    })
      .then(() => toast.success(`Thank You for reviewing the Item`))
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <StarRatingEditAble rating={rating} setRating={setRating} />
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
