import React from "react";
import ReviewForm from "./ReviewForm/ReviewForm";
import StarRatingFixed from "./ReviewForm/StarRatingFixed";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { GET_SINGLE_ITEM } from "../SingleItemQuery";

export const GET_ITEM_REVIEWS = gql`
  query($id: ID!) {
    reviews(id: $id) {
      id
      rating
      text
      item {
        id
        title
      }
      author {
        id
        name
      }
    }
  }
`;

const ReviewProduct = ({ reviews, id }) => {
  // This reviews is to make raview tab active in product deatails
  const { loading, error, data } = useQuery(GET_ITEM_REVIEWS, {
    variables: { id: id },
    partialRefetch: [{ query: GET_SINGLE_ITEM }],
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  const ItemReviews = data.reviews;
  return (
    <div id="des-details2" className={`tab-pane ${reviews ? "active" : ""}`}>
      <div className="review-wrapper">
        {ItemReviews.length ? (
          ItemReviews.map((item) => (
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
