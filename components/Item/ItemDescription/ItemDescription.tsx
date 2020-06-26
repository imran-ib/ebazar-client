import React, { useState } from "react";
import ReviewProduct from "../Review/ReviewProduct";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
}

const ItemDescription: React.FC<Props> = ({ item }) => {
  const [description, setDescription] = useState(false);
  const [information, setInformation] = useState(true);
  const [reviews, setReviews] = useState(false);

  const DescriptionActive = () => {
    setInformation(false);
    setReviews(false);
    setDescription(true);

    return;
  };
  const InformationActive = () => {
    setReviews(false);
    setDescription(false);
    setInformation(true);

    return;
  };
  const ReviewActive = () => {
    setDescription(false);
    setInformation(false);
    setReviews(true);

    return;
  };

  return (
    <div className="description-review-area pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="description-review-wrapper">
              <div className="description-review-topbar nav">
                <a
                  onClick={DescriptionActive}
                  className={`${description ? "active" : ""}`}
                >
                  Description
                </a>
                <a
                  onClick={InformationActive}
                  className={`${information ? "active" : ""}`}
                >
                  Additional information
                </a>

                <a
                  onClick={ReviewActive}
                  className={`${reviews ? "active" : ""}`}
                >
                  Reviews {item ? item.itemReview.length : 0}
                </a>
              </div>

              <div className="tab-content description-review-bottom">
                {description && (
                  <div
                    id="des-details1"
                    className={`"tab-pane" ${description ? "active" : ""}`}
                  >
                    <div className="product-description-wrapper">
                      <p>{item.description}</p>
                      <p>
                        Pellentesque lacus eros, venenatis in iaculis nec,
                        luctus at eros. Phasellus id gravida magna. Maecenas
                        fringilla auctor diam consectetur placerat. Suspendisse
                        non convallis ligula. Aenean sagittis eu erat quis
                        efficitur. Maecenas volutpat erat ac varius bibendum. Ut
                        tincidunt, sem id tristique commodo, nunc diam suscipit
                        lectus, vel
                      </p>
                    </div>
                  </div>
                )}
                {information && (
                  <div
                    id="des-details3"
                    className={`"tab-pane" ${information ? "active" : ""}`}
                  >
                    <div className="product-anotherinfo-wrapper">
                      <ul>
                        <li>
                          <span>Weight</span> {item.weight}
                        </li>
                        <li>
                          <span>Dimensions</span>
                          {item.dimensions}{" "}
                        </li>
                        <li>
                          <span>Materials</span> {item.materials}
                        </li>
                        <li>
                          <span>Other Info</span> {item.otherInfo}
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {reviews && (
                  <>
                    <ReviewProduct reviews={reviews} id={item.id} />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="pro-dec-banner">
              <a href="#">
                {item?.images[0] ? (
                  <img src={item?.images[0]} alt={item.title} />
                ) : (
                  <img
                    src="static/img/no-image-available.jpg"
                    alt={item.title}
                  />
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
