import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import formatMoney from "../../Utils/formatMoney";
import ModalComponent from "../../Item/ItemModal/Modal";
import { Modal, Carousel } from "react-bootstrap";
import {
  useAddItemToCartMutation,
  CurrentUserDocument,
} from "generated/graphql";
import LikeButton from "components/Item/LikeItem/LikeItem";
import StarRatingFixed from "components/Item/Review/ReviewForm/StarRatingFixed";

import { Item } from "generated/graphql";

interface Props {
  item: Item;
}
interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  item: Item;
}

const ProducCard: React.FC<Props> = ({ item }) => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [AddItemToTheCart, { loading, error }] = useAddItemToCartMutation({
    variables: { itemId: item.id, quantity: 1 },
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  if (error) toast.error(error.message);
  return (
    <>
      <ModalComponent toggle={toggle} setToggle={setToggle} item={item} />
      {show && <ShopListModal show={show} setShow={setShow} item={item} />}
      <div id="shop-2" className="tab-pane active">
        <div className="shop-list-wrap shop-list-mrg mb-30">
          <div className="row">
            <div className="col-lg-4 col-md-5">
              <div className="product-list-img">
                <a
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <img src={item.images[0]} alt="Universal Product Style" />
                </a>

                <div className="product-quickview">
                  <a
                    onClick={() => setToggle(!toggle)}
                    title="Quick View"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i className="sli sli-magnifier-add" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 align-self-center">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="shop-list-content">
                    <h3>
                      <Link
                        href={{
                          pathname: "/item",
                          query: { id: item.id },
                        }}
                      >
                        <a>{item.title}</a>
                      </Link>
                    </h3>
                    <span>
                      {item.catagory.length > 0 ? item.catagory[0].text : ""}
                    </span>
                    <div className="ht-product-list-price">
                      <span className="new">{formatMoney(item.price)}</span>

                      <span className="old">
                        {formatMoney(item.beforeDiscountPrice)}
                      </span>
                    </div>
                    <div className="ht-product-list-ratting">
                      <StarRatingFixed stars={4} />
                    </div>
                    <div className="ht-product-list-action d-flex ">
                      <LikeButton id={item.id} />

                      <a
                        aria-disabled={loading}
                        onClick={() => {
                          AddItemToTheCart().then(() =>
                            toast.success("Sucess: Item is Added To Your Cart")
                          );
                        }}
                        className="list-cart ml-3"
                        title="Add To Cart"
                      >
                        <i className="sli sli-basket-loaded" /> Add
                        {loading ? "ing... Please Wait" : "To Cart"}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="shop-list-paragraph pt-5">
                    {item.description.substring(0, 150)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ShopListModal: React.FC<ModalProps> = ({ show, setShow, item }) => {
  const NoImage = "static/img/no-image-available.jpg";
  return (
    <>
      <Modal
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {item.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {item.images.map((img) => (
              <Carousel.Item>
                <img
                  width="900px"
                  className="d-block "
                  src={img || NoImage}
                  alt="First slide"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProducCard;
