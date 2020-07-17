import React from "react";
import StripeCheckoutComponent from "./Stripe/StripeCheckout ";
import calcTotalPrice from "../Utils/CalculateTotal";
import formatMoney from "../Utils/formatMoney";
import { User } from "generated/graphql";

interface Props {
  user: User;
}

const Order: React.FC<Props> = ({ user }) => {
  return (
    <div className="col-lg-5">
      <div className="your-order-area">
        <h3>Your order</h3>
        <div className="your-order-wrap gray-bg-4">
          <div className="your-order-info-wrap">
            <div className="your-order-info">
              <ul>
                <li>
                  Product <span>Total</span>
                </li>
              </ul>
            </div>
            <div className="your-order-middle">
              <ul>
                {user.cart.length &&
                  user.cart.map((item) => (
                    <div key={item.id}>
                      <li>
                        {item.item.title} | {formatMoney(item.item.price)} X{" "}
                        {item.quantity}{" "}
                        <span>
                          {" "}
                          {formatMoney(item.quantity * item.item.price)}{" "}
                        </span>
                      </li>
                      <hr />
                    </div>
                  ))}
              </ul>
            </div>
            <div className="your-order-info order-subtotal">
              <ul>
                <li>
                  Subtotal{" "}
                  <span>{formatMoney(calcTotalPrice(user.cart))} </span>
                </li>
              </ul>
            </div>
            <div className="your-order-info order-shipping">
              <ul>
                <li>
                  Shipping{" "}
                  <p>
                    Enter your full address to see shipping <br />
                    costs.{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="your-order-info order-total">
              <ul>
                <li>
                  Total <span>{formatMoney(calcTotalPrice(user.cart))}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="payment-method">
            <div className="pay-top sin-payment">
              <input
                disabled
                onClick={() => alert("Not Available Yet")}
                id="payment_method_1"
                className="input-radio"
                type="radio"
                value="cheque"
                name="payment_method"
              />
              <label htmlFor="payment_method_1"> Direct Bank Transfer </label>
              <div className="payment-box payment_method_bacs">
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="pay-top sin-payment">
              <input
                disabled
                onClick={() => alert("Not Available Yet")}
                id="payment-method-2"
                className="input-radio"
                type="radio"
                value="cheque"
                name="payment_method"
              />
              <label htmlFor="payment-method-2">Check payments</label>
              <div className="payment-box payment_method_bacs">
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="pay-top sin-payment">
              <input
                disabled
                onClick={() => alert("Not Available Yet")}
                id="payment-method-3"
                className="input-radio"
                type="radio"
                value="cheque"
                name="payment_method"
              />
              <label htmlFor="payment-method-3">Cash on delivery </label>
              <div className="payment-box payment_method_bacs">
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="pay-top sin-payment sin-payment-3">
              <input
                disabled
                id="payment-method-4"
                className="input-radio"
                type="radio"
                value="cheque"
                name="payment_method"
              />
              <label htmlFor="payment-method-4">PayPal</label>
              <img
                className="mt-5"
                alt="Payment Image"
                src="/static/img/icon-img/payment.png"
              />
            </div>
          </div>
        </div>
        <div className="Place-order mt-40">
          <StripeCheckoutComponent>
            <a className="btn btn-danger bnt-block">Place Order</a>
          </StripeCheckoutComponent>
        </div>
      </div>
    </div>
  );
};

export default Order;
