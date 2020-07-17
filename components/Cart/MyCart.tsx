import React from "react";
import Link from "next/link";
import calcTotalPrice from "../Utils/CalculateTotal";
import formatMoney from "../Utils/formatMoney";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useUser } from "components/Utils/auth";
import {
  useDeleteCartItemMutation,
  useEmptyUserCartMutation,
  CurrentUserDocument,
} from "generated/graphql";
import Head from "next/head";

//Todo Add Express or standard charges

function MyCart() {
  const [DeleteCartItem] = useDeleteCartItemMutation();
  const [EmptyUserCart, { loading }] = useEmptyUserCartMutation();
  const user = useUser();

  return (
    <div>
      <Head>
        <title>
          {" "}
          {user?.name} | Cart | {user?.cart.length} Items{" "}
        </title>
      </Head>
      <div className="cart-main-area pt-95 pb-100">
        <div className="container">
          <h3 className="cart-page-title text-cent">Your cart items</h3>
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
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user?.cart.length ? (
                        user.cart.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <Link
                                href={{
                                  pathname: "item",
                                  query: { id: item.item.id },
                                }}
                              >
                                <a>
                                  {item.item.eagerImages.length ? (
                                    <img
                                      width="200"
                                      src={item.item.eagerImages[0]}
                                    />
                                  ) : (
                                    <img
                                      width="200"
                                      src="static/img/no-image-available.jpg"
                                      alt={item.item.title}
                                    />
                                  )}
                                </a>
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link
                                href={{
                                  pathname: "item",
                                  query: { id: item.item.id },
                                }}
                              >
                                <a>{item.item.title}</a>
                              </Link>
                            </td>
                            <td className="product-price-cart">
                              <span className="amount">
                                {formatMoney(item.item.price)}
                              </span>
                            </td>
                            <td className="product-quantity">
                              <div className="cart-plus-minus">
                                <input
                                  className="cart-plus-minus-box"
                                  type="text"
                                  name="qtybutton"
                                  defaultValue={item.quantity}
                                />
                              </div>
                            </td>
                            <td className="product-subtotal">
                              {formatMoney(item.item.price * item.quantity)}
                            </td>
                            <td className="product-remove">
                              <Link
                                href={{
                                  pathname: "/item",
                                  query: { id: item.item.id },
                                }}
                              >
                                <a>
                                  <i className="sli sli-pencil" />
                                </a>
                              </Link>
                              <a
                                onClick={() => {
                                  if (
                                    confirm(
                                      "Are you sure You want to delete this item from your cart"
                                    )
                                  ) {
                                    const id = item.item.id;
                                    DeleteCartItem({
                                      variables: { cartItemId: id },
                                      refetchQueries: [
                                        { query: CurrentUserDocument },
                                      ],
                                    }).catch((err) => toast.error(err.message));
                                  }
                                }}
                              >
                                <i className="sli sli-close" />
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            {" "}
                            <h4 style={{ textAlign: "center" }}>
                              {" "}
                              Your Cart is Empty
                            </h4>
                          </td>
                        </tr>
                      )}
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

                      <div className="cart-clear">
                        <a
                          onClick={() => {
                            if (
                              confirm(
                                " TODO: Are You Sure You Want To Clear You Cart"
                              )
                            ) {
                              EmptyUserCart({
                                // @ts-ignore
                                variables: { userId: user?.id },
                                refetchQueries: [
                                  { query: CurrentUserDocument },
                                ],
                              }).catch((err) => toast.error(err.message));
                            }
                          }}
                        >
                          {loading && (
                            <Spinner
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          )}
                          Clear Shopping Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="discount-code-wrapper">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gray">
                        Use Coupon Code
                      </h4>
                    </div>
                    <div className="discount-code">
                      <p>Enter your coupon code if you have one.</p>
                      <form method="POST">
                        <input type="text" name="name" />
                      </form>
                      <button
                        onClick={() =>
                          toast.error(
                            "Error: Your Coupon is either invalid or Expire"
                          )
                        }
                        className="btn btn-info"
                      >
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="grand-totall">
                    <div className="title-wrap">
                      <h4 className="cart-bottom-title section-bg-gary-cart">
                        Cart Total
                      </h4>
                    </div>
                    <h5>
                      Total products{" "}
                      <span> {formatMoney(calcTotalPrice(user?.cart))}</span>
                    </h5>
                    <div className="total-shipping">
                      <h5>Total shipping</h5>
                      <ul>
                        <li>
                          <input type="checkbox" /> Standard <span>$0.00</span>
                        </li>
                        <li>
                          <input type="checkbox" /> Express <span>$0.00</span>
                        </li>
                      </ul>
                    </div>
                    <h4 className="grand-totall-title">
                      Grand Total{" "}
                      <span>{formatMoney(calcTotalPrice(user?.cart))}</span>
                    </h4>
                    <Link href="/checkout">
                      <a className="btn btn-info btn-block">
                        Proceed to Checkout
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCart;
