import React from "react";
import ReviewForm from "./ReviewForm/ReviewForm";
import StarRatingFixed from "./ReviewForm/StarRatingFixed";

import { ItemDocument, useItemReviewsQuery } from "generated/graphql";
import { MDBIcon } from "mdbreact";

interface Props {
  reviews: boolean;
  id: string;
}

const ReviewProduct: React.FC<Props> = ({ reviews, id }) => {
  // props reviews is to make reviews tab active in product detail
  const { loading, error, data } = useItemReviewsQuery({
    variables: { itemId: id },
    partialRefetch: true,
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  const ItemReviews = data?.ITemRevives;
  return (
    <div id="des-details2" className={`tab-pane ${reviews ? "active" : ""}`}>
      <div
        style={{ maxHeight: "500px", overflowY: "scroll" }}
        className="review-wrapper"
      >
        {ItemReviews?.length ? (
          ItemReviews?.map((item) => (
            <div key={item.id}>
              <div className="single-review">
                <div className="review-img">
                  <img src="/static/img/no-user.png" alt="User Avatar" />
                </div>

                <div className="review-content ">
                  <p>{item.text}</p>
                  <div className="review-top-wrap d-flex justify-content-between align-items-center ">
                    <div className="review-name">
                      <h4>{item.author.name}</h4>
                      <hr />

                      <div className="review-rating align-self-end">
                        <StarRatingFixed stars={item.rating} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="float-right">
                <ul className="d-flex">
                  <li className="ml-4">
                    <MDBIcon
                      onClick={() => {
                        alert("InProgress");
                      }}
                      className="p-2"
                      size="1x"
                      far
                      icon="thumbs-down"
                    />
                    <br />
                    <small>40 Vote down</small>
                  </li>
                  <li className="ml-4">
                    <MDBIcon
                      onClick={() => {
                        alert("InProgress");
                      }}
                      className="p-2"
                      size="1x"
                      far
                      icon="thumbs-up"
                    />
                    <br />
                    <small>40 Vote up</small>
                  </li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <>
            <p>This Item has No Reviews Yet. Be First One To Create A Review</p>
            <hr />
          </>
        )}
      </div>
      <ReviewForm id={id} />
    </div>
  );
};

export default ReviewProduct;
