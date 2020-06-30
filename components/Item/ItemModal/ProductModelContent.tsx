import React, { useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";
import FormatMoney from "../../Utils/formatMoney";
import AddToCartButton from "../../Cart/AddToCartButton";
import LikeButton from "../LikeItem/LikeItem";
import AverageReviews from "../../Utils/AverageReviews";
import StarRatingFixed from "../Review/ReviewForm/StarRatingFixed";
import Link from "next/link";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
}
const ProductModelContent: React.FC<Props> = ({ item }) => {
  const [mainImage, setMainImage] = useState(`${item.images[0]}`);
  return (
    <div className="row">
      <div className="col-md-5 col-sm-12 col-xs-12">
        <div className="tab-content quickview-big-img">
          <div id="pro-1" className="tab-pane fade show active">
            <div className="zoompro-border zoompro-span">
              {mainImage ? (
                <SideBySideMagnifier
                  className="zoompro"
                  imageSrc={mainImage}
                  imageAlt={item.title}
                  data-image={mainImage}
                  data-zoom-image={mainImage}
                  largeImageSrc={mainImage} // Optional
                />
              ) : (
                <img src="static/img/no-image-available.jpg" alt={item.title} />
              )}
            </div>
          </div>
        </div>
        {/* <!-- Thumbnail Large Image End --> */}
        {/* <!-- Thumbnail Image End --> */}
        <div className="quickview-wrap mt-15">
          <div
            className="quickview-slide-active owl-carousel nav nav-style-2"
            role="tablist"
          >
            {item.images.map((img, i) => (
              <a
                onClick={() => setMainImage(img)}
                key={i}
                className="active"
                data-toggle="tab"
              >
                <img width="100" src={img} alt={item.title} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-7 col-sm-12 col-xs-12">
        <div className="product-details-content quickview-content">
          <h2>{item?.title.toUpperCase()}</h2>
          <div className="product-details-price">
            <span>{FormatMoney(item.price)}</span>
            <span className="old">{FormatMoney(item.beforeDiscountPrice)}</span>
          </div>
          <div className="pro-details-rating-wrap">
            <div>
              <StarRatingFixed stars={AverageReviews(item)} />
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
              <Link
                href={{
                  pathname: "/item",
                  query: { id: item.id },
                }}
              >
                <a> {item.reviewCount} Reviews</a>
              </Link>
            </span>
          </div>
          <p>{item.overview}</p>
          <div className="pro-details-list ">
            <ul>
              {item.OtherFeatures.map((feature, i) => (
                <li key={i}>- {feature}</li>
              ))}
              <li>
                - Remaining Stock: <b> {item.stock} </b>
              </li>
            </ul>
          </div>
          <div className="pro-details-size-color">
            <span>Color</span>
            <div className="pro-details-color-content d-flex ml-3">
              <ul className="d-flex flex-wrap">
                {item.colors.map((color) => (
                  <li className="btn btn-sm text-bold" key={color.id}>
                    {color.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pro-details-size ">
            <strong>Size</strong>
            <div className="pro-details-size-content">
              <ul className="ml-5">{item.dimensions}</ul>
            </div>
          </div>

          <div className="pro-details-quality ">
            <AddToCartButton id={item.id} />

            <LikeButton id={item.id} />
          </div>
          <div className="pro-details-meta">
            <span>Categories :</span>
            <ul>
              {item?.catagory.map((catagory) => (
                <li key={catagory.id}>
                  <a
                    style={{
                      padding: "5px",
                    }}
                  >
                    {catagory.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="pro-details-meta">
            <span>Tag :</span>
            <ul>
              {item?.tags.map((tag) => (
                <li key={tag.id}>
                  <a
                    style={{
                      padding: "5px",
                    }}
                  >
                    {tag.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModelContent;
