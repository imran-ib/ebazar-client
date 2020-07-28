import React from "react";
import Link from "next/link";
import formatMoney from "../Utils/formatMoney";
import AddToCartButton from "../Cart/AddToCartButton";
import LikeButton from "../Item/LikeItem/LikeItem";
import Styles from "styled-components";
import media from "styled-media-query";
import { useUser } from "components/Utils/auth";
import {
  useRemoveAllLikesMutation,
  CurrentUserDocument,
} from "generated/graphql";
import { toast } from "react-toastify";
import Head from "next/head";

const OrderStyles = Styles.div`
overflow-x: hidden;
.text-center {
  ${media.lessThan("small")`
  text-align: center;
    `}
}
`;
function Wishlist() {
  const [RemoveAllLikes, { loading }] = useRemoveAllLikesMutation({
    refetchQueries: [{ query: CurrentUserDocument }],
  });
  const user = useUser();

  const wishlist = user?.likes.map((item) => item);

  const RemoveAllLikesHandler = () => {
    RemoveAllLikes({
      variables: {
        //@ts-ignore
        userId: user.id,
      },
    })
      .then(() => toast.success(`Success! Wishlist emptied`))
      .catch((error) => toast.error(error.message));
  };

  return (
    <OrderStyles>
      <Head>
        <title> {user?.name} | 💖 list </title>
      </Head>
      <div className="cart-main-area pt-95 pb-100">
        <div className="container">
          <h3 className="cart-page-title text-center">Your Loved items</h3>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form action="post">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Until Price</th>
                        <th>Add To Cart</th>
                        <th>Subtotal</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist?.map((item) => (
                        <tr key={item.item.id}>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img width="150" src={item.item.eagerImages[0]} />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">{item.item.title}</a>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">
                              {formatMoney(item.item.price)}
                            </span>
                          </td>

                          <td className="product-subtotal">
                            {" "}
                            <div className="product-details-content ml-30">
                              <div className="pro-details-quality">
                                <AddToCartButton
                                  id={item.item.id}
                                  whishList={true}
                                />{" "}
                              </div>
                            </div>
                          </td>
                          <td className="product-price-cart">
                            <span className="amount">
                              {formatMoney(item.item.price)}
                            </span>
                          </td>

                          <td className="product-remove">
                            <LikeButton id={item.item.id} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                      <div className="cart-shiping-update">
                        <Link href="/shop">
                          <a>Continue Shopping</a>
                        </Link>
                      </div>
                      <button
                        disabled={loading}
                        onClick={() => {
                          if (
                            confirm(
                              `Are You Sure You Want To Empty Your Wishlist`
                            )
                          ) {
                            RemoveAllLikesHandler();
                          }
                        }}
                        className="btn btn-danger float-right"
                      >
                        {loading ? "Removing..." : "Remove All Items"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </OrderStyles>
  );
}

export default Wishlist;
