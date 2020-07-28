import React, { useRef, useState } from "react";
import Link from "next/link";
import { CartItem, SubTotal } from "./CartItem";
import formatMoney from "../Utils/formatMoney";
import RubberBand from "react-reveal/RubberBand";
import calcTotalPrice from "components/Utils/CalculateTotal";
import { useUser } from "components/Utils/auth";
import { useOnClickOutside } from "../Utils/ClickOutside";

const Cart = () => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  const user = useUser();

  const TotalItems = user?.cart.reduce((tally, cartItem) => {
    return tally + cartItem.quantity;
  }, 0);

  const TotalCartPrice = formatMoney(calcTotalPrice(user?.cart));

  return (
    <div
      style={{ overflow: `${isModalOpen ? "" : "hidden"}` }}
      // @ts-ignore
      ref={ref}
      className={`cart-wrap ${isModalOpen && "show"} `}
    >
      <button onClick={() => setModalOpen(true)} className="icon-cart-active">
        <RubberBand spy={TotalItems}>
          <div style={{ width: "50px" }}>
            <span className="icon-cart bag" style={{ right: "15px" }}>
              <i className="sli sli-bag" />
              {TotalItems ? (
                <span
                  className="count-style"
                  style={{ top: "4px", left: "14px" }}
                >
                  {TotalItems || 0}
                </span>
              ) : (
                ""
              )}
            </span>
            {TotalCartPrice !== "$0" && TotalCartPrice !== "$NaN" ? (
              <span className="cart-price">{TotalCartPrice}</span>
            ) : (
              ""
            )}
          </div>
        </RubberBand>
      </button>
      <div className={`shopping-cart-content ${isModalOpen && "show"}`}>
        <div className="shopping-cart-top">
          <h4>{user?.name}'s Shopping Cart</h4>
          <a className="cart-close">
            <i onClick={() => setModalOpen(false)} className="sli sli-close" />
          </a>
        </div>
        {/* CART Item Component */}
        <CartItem user={user} />

        <div className="shopping-cart-bottom">
          <SubTotal />
          

          <div className="shopping-cart-btn btn-hover text-center">
            <Link href="/checkout">
              <a className="default-btn">checkout</a>
            </Link>
            <Link href="mycart">
              <a className="default-btn">view cart</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
