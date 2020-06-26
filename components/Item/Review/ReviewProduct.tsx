import React from "react";
import ReviewForm from "./ReviewForm/ReviewForm";
import StarRatingFixed from "./ReviewForm/StarRatingFixed";
import {
  ItemReviewsDocument,
  useToggleReviewUpVoteMutation,
  useToggleReviewDownVoteMutation,
  Item,
} from "generated/graphql";
import { MDBIcon } from "mdbreact";
import { toast } from "react-toastify";
import { useUser } from "components/Utils/auth";

interface Props {
  reviews: boolean;
  item: Item;
}

const ReviewProduct: React.FC<Props> = ({ reviews, item }) => {
  // props reviews is to make reviews tab active in product detail
  const [
    ToggleReviewUpVote,
    { loading: upLoading, error: upError },
  ] = useToggleReviewUpVoteMutation({
    refetchQueries: [
      { query: ItemReviewsDocument, variables: { itemId: item.id } },
    ],
  });
  const [
    ToggleReviewDownVote,
    { loading: downLoading, error: downError },
  ] = useToggleReviewDownVoteMutation({
    refetchQueries: [
      { query: ItemReviewsDocument, variables: { itemId: item.id } },
    ],
  });

  if (upError) toast.error(upError.message);
  if (downError) toast.error(downError.message);
  const ItemReviews = item?.itemReview;
  const user = useUser();

  return (
    <div id="des-details2" className={`tab-pane ${reviews ? "active" : ""}`}>
      <div
        style={{ maxHeight: "500px", overflowY: "scroll" }}
        className="review-wrapper"
      >
        {ItemReviews?.length ? (
          ItemReviews?.map((review) => (
            <div key={review.id}>
              <div className="single-review flex-1 ">
                <div className="review-img">
                  <img
                    src={review.author.avatar || "/static/img/no-user.png"}
                    alt="User Avatar"
                  />
                </div>
                <div className="review-content ">
                  <p>{review.text}</p>
                  <div className="review-top-wrap d-flex justify-content-between align-items-center ">
                    <div className="review-name">
                      <h4>{review.author.name}</h4>
                      <hr />

                      <div className="review-rating align-self-end">
                        <StarRatingFixed stars={review.rating} />
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="d-flex  ml-auto align-self-center mr-3 ">
                  <li style={{ cursor: "pointer" }} className="ml-4">
                    <MDBIcon
                      onClick={() => {
                        ToggleReviewUpVote({
                          variables: {
                            itemId: item.id,
                            reviewId: review.id,
                          },
                        });
                      }}
                      className="p-2"
                      size="1x"
                      far
                      icon="thumbs-up"
                      style={{
                        color: review.upVote.some(
                          (vote) => vote.authorId === user?.id
                        )
                          ? "blue"
                          : "",
                      }}
                    />

                    <br />
                    {upLoading ? (
                      <div className="spinner-grow text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <small className="ml-3">{review.upVoteCount}</small>
                    )}
                  </li>
                  <li style={{ cursor: "pointer" }} className="ml-4">
                    <MDBIcon
                      onClick={() => {
                        ToggleReviewDownVote({
                          variables: { reviewId: review.id, itemId: item.id },
                        });
                      }}
                      className="p-2"
                      size="1x"
                      far
                      icon="thumbs-down"
                      style={{
                        color: review.downVote.some(
                          (vote) => vote.authorId === user?.id
                        )
                          ? "blue"
                          : "",
                      }}
                    />

                    <br />
                    {downLoading ? (
                      <div className="spinner-grow text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <small className="ml-3">{review.downVoteCount}</small>
                    )}
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
      <ReviewForm id={item.id} />
    </div>
  );
};

export default ReviewProduct;
