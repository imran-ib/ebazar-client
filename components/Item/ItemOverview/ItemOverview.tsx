import React, { useState } from "react";
import Link from "next/link";
import FormatMoney from "../../Utils/formatMoney";
import { SideBySideMagnifier } from "react-image-magnifiers";
import AddToCartButton from "../../Cart/AddToCartButton";
import LikeButton from "../LikeItem/LikeItem";
import StarRatingFixed from "../Review/ReviewForm/StarRatingFixed";
import AverageReviews from "../../Utils/AverageReviews";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
}

const ItemOverview: React.FC<Props> = ({ item }) => {
  const ItemImages = item.images.map((image) => image);
  const ItemEagerImages = item.eagerImages.map((img) => img);
  const [mainImage, setImage] = useState(`${ItemEagerImages[0]}`);

  const percent = Math.abs(
    (item.beforeDiscountPrice / item.price) * 100 - 100
  ).toFixed(0);

  return (
    <div className="product-details-area pt-100 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product-details-img">
              <div className="zoompro-border zoompro-span">
                <SideBySideMagnifier
                  className="zoompro"
                  imageSrc={mainImage}
                  imageAlt={item.title}
                  data-image={mainImage}
                  data-zoom-image={mainImage}
                  largeImageSrc={mainImage} // Optional
                />

                <span>{percent}% Off</span>
                <div className="product-video">
                  <a
                    className="video-popup"
                    target="_blank"
                    href={item?.videoLink || ""}
                  >
                    <i className="sli sli-control-play" />
                    View Video
                  </a>
                </div>
              </div>
              {/* small Pictures  */}
              <div id="gallery" className="mt-20 product-dec-slider">
                {ItemImages.map((Image, i) => (
                  <a
                    key={i}
                    onClick={() => {
                      setImage(Image);
                    }}
                    data-image={Image}
                    data-zoom-image={Image}
                  >
                    {Image !== null || Image! == undefined ? (
                      <img
                        style={{ width: "80px", height: "80px" }}
                        src={Image}
                        alt={item.title}
                      />
                    ) : (
                      <img
                        style={{ width: "80px", height: "80px" }}
                        src="static/img/no-image-available.jpg"
                        alt={item.title}
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-30">
              <h2>{item.title.toUpperCase()}</h2>
              <div className="product-details-price">
                <span>{FormatMoney(item.price)}</span>
                <span className="old">
                  {FormatMoney(item.beforeDiscountPrice)}
                </span>
              </div>
              <div className="pro-details-rating-wrap">
                <div className="b-red">
                  <StarRatingFixed stars={AverageReviews(item)} />
                </div>
                <span
                  style={{
                    marginLeft: "20px",
                    marginBottom: "15px",
                  }}
                >
                  |
                </span>

                <span
                  style={{
                    marginLeft: "20px",
                    marginBottom: "15px",
                  }}
                >
                  <a
                    onClick={() => {
                      if (window !== undefined) {
                        const Element = document.getElementById("Bottom");
                        const Rect = Element?.getBoundingClientRect();
                        window.scrollTo({
                          top: Rect?.y,
                          left: 0,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {" "}
                    {item && item.reviewCount !== null
                      ? item.reviewCount
                      : 0}{" "}
                    Reviews
                  </a>
                </span>
              </div>
              <p>{item.overview}</p>
              <div className="pro-details-list">
                <ul>
                  {item.OtherFeatures.map((feature, i) => (
                    <li key={i}>- {feature}</li>
                  ))}
                  <li>
                    - Remaining Stock: <b> {item.stock} </b>
                  </li>
                  <li>
                    - Sold By: <b> {item.brand} </b>
                  </li>
                </ul>
              </div>
              <div className="pro-details-color-wrap">
                <span>Color</span>

                <div className="pro-details-color-content d-flex ">
                  <ul className="d-flex flex-wrap">
                    {item.colors.map((color) => (
                      <li className="btn btn-sm" key={color.id}>
                        {color.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pro-details-size">
                  <span>Size</span>
                  <div className="pro-details-size-content">
                    <ul>
                      {item.dimensions &&
                        item.dimensions.split(",").map((tag, i) => (
                          <li key={i}>
                            <a>{tag}</a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="pro-details-quality">
                <AddToCartButton id={item.id} />
                <LikeButton id={item.id} />
              </div>
              <div className="pro-details-meta">
                <span>Categories :</span>
                <ul>
                  {item.catagory &&
                    item.catagory.map((catagory) => (
                      <li key={catagory.id}>
                        <Link
                          href={`/shop/list/results/category/${catagory.text}`}
                        >
                          <a
                            style={{
                              padding: "5px",
                            }}
                          >
                            {catagory.text}{" "}
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="pro-details-meta">
                <span>Tag :</span>
                <ul>
                  {item.tags &&
                    item.tags.map((tag) => (
                      <li key={tag.id}>
                        <Link href={`/shop/list/results/tag/${tag.text}`}>
                          <a
                            style={{
                              padding: "5px",
                            }}
                          >
                            {tag.text}
                          </a>
                        </Link>
                      </li>
                    ))}
                  <div id="Bottom"></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemOverview;
