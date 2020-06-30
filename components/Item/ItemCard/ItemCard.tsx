import React, { useState } from "react";
import media from "styled-media-query";
import Styles from "styled-components";
import Link from "next/link";
import formatMoney from "../../Utils/formatMoney";
import ModalComponent from "../ItemModal/Modal";
import LikeButton from "../LikeItem/LikeItem";
import StarRatingFixed from "../Review/ReviewForm/StarRatingFixed";
import AverageReviews from "../../Utils/AverageReviews";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
  autoPlay?: boolean;
}

const ProductCartStyles = Styles.div`
.M-Small{
  ${media.lessThan("large")`
  margin-left: 30px;
  `}
}
`;

const ItemCard: React.FC<Props> = ({ item, autoPlay }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <ProductCartStyles>
      {item && (
        <>
          <ModalComponent toggle={toggle} setToggle={setToggle} item={item} />
          <>
            <div style={{ width: "250px" }} className="M-Small ht-products">
              <div className="ht-product ht-product-action-on-hover ht-product-category-right-bottom mb-30">
                <div className="ht-product-inner">
                  <div className="ht-product-image-wrap">
                    {item && (
                      <Link
                        href={{
                          pathname: "/item",
                          query: { id: item.id },
                        }}
                      >
                        <a className="ht-product-image">
                          {item.images ? (
                            <img
                              className="card-img-top"
                              style={{ width: "250px", height: "200px" }}
                              src={item.images[0]}
                              alt={item.title}
                            />
                          ) : (
                            <img
                              style={{ width: "250px", height: "200px" }}
                              src="static/img/no-image-available.jpg"
                              alt=""
                            />
                          )}
                        </a>
                      </Link>
                    )}
                    {!autoPlay && (
                      <>
                        <div className="ht-product-action">
                          <ul>
                            <li>
                              <a onClick={() => setToggle(!toggle)}>
                                <i
                                  style={{ color: "red" }}
                                  className="sli sli-magnifier"
                                />
                                <span className="ht-product-action-tooltip">
                                  Quick View
                                </span>
                              </a>
                            </li>
                            <li>
                              <LikeButton id={item.id} />
                            </li>

                            <li>
                              <a onClick={() => setToggle(!toggle)}>
                                <i
                                  style={{ color: "red" }}
                                  className="sli sli-bag"
                                />
                                <span className="ht-product-action-tooltip">
                                  Add to Cart
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="ht-product-content">
                    <div className="ht-product-content-inner">
                      <div className="ht-product-categories">
                        <a href="#">{item.catagory[0].text}</a>
                      </div>
                      <div
                        style={{
                          display: "inline",
                          width: "60px",
                          wordWrap: "break-word",
                        }}
                      >
                        <h4 className="ht-product-title">
                          <a>{item.title}</a>
                        </h4>
                      </div>
                      <div className="ht-product-price">
                        <span className="new">{formatMoney(item.price)}</span>
                        <span className="old">
                          {formatMoney(item.beforeDiscountPrice)}
                        </span>
                      </div>
                      <div className="ht-product-ratting-wrap">
                        <StarRatingFixed stars={AverageReviews(item)} />
                      </div>
                    </div>
                    <div className="ht-product-action">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="sli sli-magnifier" />
                            <span className="ht-product-action-tooltip">
                              Quick View
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="sli sli-heart" />
                            <span className="ht-product-action-tooltip">
                              Add to Wishlist
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="sli sli-refresh" />
                            <span className="ht-product-action-tooltip">
                              Add to Compare
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="sli sli-bag" />
                            <span className="ht-product-action-tooltip">
                              Add to Cart
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="ht-product-countdown-wrap">
                      <div
                        className="ht-product-countdown"
                        data-countdown="2020/01/01"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </ProductCartStyles>
  );
};

export default ItemCard;
