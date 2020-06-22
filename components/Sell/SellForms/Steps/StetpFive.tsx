import React, { useState } from "react";
import { useCreateItemMutation } from "generated/graphql";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import formatMoney from "components/Utils/formatMoney";
import StarRatingFixed from "components/Item/Review/ReviewForm/StarRatingFixed";
import { MDBIcon } from "mdbreact";
import { NO_IMAGE } from "components/Utils/config";
interface Props {
  nextStep?: any;
  previousStep?: any;
  data: {
    Title: string;
    Brand: string;
    Weight: string;
    Description: string;
    Overview: string;
    Dimensions: string;
    Materials: string;
    Video: string;
    Other: string;
    Price: number;
    DefaultPrice: number;
    Stock: number;
    tags: string[];
    category: string[];
    Color: string[];
    Features: string[];
    images: string[];
    eagerImages: [];
    Disabled: boolean;
  };
}

const StepFive = (props: Props) => {
  const [description, setDescription] = useState(true);
  const [information, setInformation] = useState(false);
  const [reviews, setReviews] = useState(false);

  const [index, setIndex] = useState(0);
  const [mainImage, setImage] = useState(props.data.images[0]);

  const [CreateItem, { loading, error }] = useCreateItemMutation();
  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };
  const { data } = props;
  const item = data;

  const percent = Math.abs(
    (item.DefaultPrice / item.Price) * 100 - 100
  ).toFixed(0);
  const Router = useRouter();

  const HandleDataSubmit = async () => {
    const item = await CreateItem({
      variables: {
        title: data.Title,
        description: data.Description,
        overview: data.Overview,
        brand: data.Brand,
        weight: data.Weight,
        dimensions: data.Dimensions,
        materials: data.Materials,
        otherInfo: data.Other,
        price: data.Price,
        beforeDiscountPrice: data.DefaultPrice,
        stock: data.Stock,
        images: data.images,
        eagerImages: data.eagerImages,
        catagory: data.category,
        tags: data.tags,
        colors: data.Color,
        otherFeature: data.Features,
      },
    }).catch((err) => toast.error(err.message));
    toast.success(`Success! Item Is Created`);
    Router.push({
      pathname: `/item`,
      //@ts-ignore
      query: { id: item?.data.CreateItem.id },
    });
  };
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
    <>
      <div className="Info ml-5">
        <span>
          <span className="step">Step Five</span> <br />
          <span className="step-text ">Review Your Item</span>
        </span>
      </div>
      <div className="product-details-area pt-100 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product-details-img">
                <div className="zoompro-border zoompro-span">
                  <img src={mainImage} alt="" />

                  <span>{percent}% Off</span>
                  <div className="product-video">
                    <a
                      onClick={() => alert("Not Allowed")}
                      className="video-popup"
                      target="_blank"
                    >
                      <i className="sli sli-control-play" />
                      View Video
                    </a>
                  </div>
                </div>
                {/* small Pictures  */}
                <div id="gallery" className="mt-20 product-dec-slider">
                  {item.images.map((Image, i) => (
                    <a
                      key={i}
                      onClick={() => setImage(Image)}
                      data-image={Image}
                      data-zoom-image={Image}
                    >
                      {Image !== null || Image! == undefined ? (
                        <img
                          style={{ width: "80px", height: "80px" }}
                          src={Image}
                          alt={item.Title}
                        />
                      ) : (
                        <img
                          style={{ width: "80px", height: "80px" }}
                          src={NO_IMAGE}
                          alt={item.Title}
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product-details-content ml-30">
                <h2>{item.Title.toUpperCase()}</h2>
                <div className="product-details-price">
                  <span>{formatMoney(item.Price)}</span>
                  <span className="old">{formatMoney(item.DefaultPrice)}</span>
                </div>
                <div className="pro-details-rating-wrap">
                  <div>
                    <StarRatingFixed stars={5} />
                  </div>
                  <span
                    style={{
                      marginLeft: "20px",
                      marginBottom: "15px",
                    }}
                  >
                    {" "}
                    |{" "}
                  </span>

                  <span
                    style={{
                      marginLeft: "20px",
                      marginBottom: "15px",
                    }}
                  >
                    <a> 0 Reviews</a>
                  </span>
                </div>
                <p>Reviews</p>
                <div className="pro-details-list">
                  <ul>
                    {item.Features.map((feature, i) => (
                      <li key={i}>- {feature}</li>
                    ))}
                    <li>
                      - Remainig Stock: <b> {item.Stock} </b>
                    </li>
                    <li>
                      - Sold By: <b> {item.Brand} </b>
                    </li>
                  </ul>
                </div>
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div>
                      <ul>
                        {item.Color.map((color, i) => (
                          <li className="badge badge-light" key={i}>
                            {color}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pro-details-size">
                    <span>Size</span>
                    <div className="pro-details-size-content">
                      <ul>
                        {item.Dimensions &&
                          item.Dimensions.split(",").map((tag, i) => (
                            <li key={i}>
                              <a>{tag}</a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pro-details-quality">
                  <CartButton />
                  <MDBIcon style={{ color: "red" }} icon="heart" />
                </div>
                <div className="pro-details-meta">
                  <span>Categories :</span>
                  <ul>
                    {item.category &&
                      item.category.map((catagory, i) => (
                        <li key={i}>
                          <a
                            onClick={() => alert("Not Allowed")}
                            style={{
                              padding: "5px",
                            }}
                          >
                            {catagory}{" "}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="pro-details-meta">
                  <span>Tag :</span>
                  <ul>
                    {item.tags &&
                      item.tags.map((tag, i) => (
                        <li key={i}>
                          <a
                            onClick={() => alert("Not Allowed")}
                            style={{
                              padding: "5px",
                            }}
                          >
                            {tag}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    Reviews 0
                  </a>
                </div>

                <div className="tab-content description-review-bottom">
                  {description && (
                    <div
                      id="des-details1"
                      className={`"tab-pane" ${description ? "active" : ""}`}
                    >
                      <div className="product-description-wrapper">
                        <p>{item.Description}</p>
                        <p>
                          Pellentesque lacus eros, venenatis in iaculis nec,
                          luctus at eros. Phasellus id gravida magna. Maecenas
                          fringilla auctor diam consectetur placerat.
                          Suspendisse non convallis ligula. Aenean sagittis eu
                          erat quis efficitur. Maecenas volutpat erat ac varius
                          bibendum. Ut tincidunt, sem id tristique commodo, nunc
                          diam suscipit lectus, vel
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
                            <span>Weight</span> {item.Weight}
                          </li>
                          <li>
                            <span>Dimensions</span>
                            {item.Dimensions}{" "}
                          </li>
                          <li>
                            <span>Materials</span> {item.Materials}
                          </li>
                          <li>
                            <span>Other Info</span> {item.Overview}
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* {reviews && (
                  <>
                    <ReviewProduct reviews={reviews} id={item.id} />
                  </>
                )} */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="pro-dec-banner">
                <a href="#">
                  {item.images[0] ? (
                    <img src={item?.images[0]} alt={item.Title} />
                  ) : (
                    <img src={NO_IMAGE} alt={item.Title} />
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          disabled={loading}
          style={{ background: "#ff3331", color: "#fff" }}
          className="btn"
          onClick={props.previousStep}
        >
          prev
        </button>
        <button
          disabled={loading}
          style={{ background: "#ff3331", color: "#fff" }}
          type="button"
          className="btn  float-right"
          onClick={HandleDataSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

const CartButton = () => {
  return (
    <>
      <div className="cart-plus-minus">
        <a onClick={() => alert("Not Allowed")} className="dec qtybutton">
          -
        </a>
        <input
          defaultValue="1"
          className="cart-plus-minus-box"
          type="text"
          name="qtybutton"
        />
        <a onClick={() => alert("Not Allowed")} className="inc qtybutton">
          +
        </a>
      </div>
      <div className="pro-details-cart btn-hover">
        <a onClick={() => alert("Not Allowed")}>Add To Cart</a>
      </div>
    </>
  );
};

export default StepFive;
