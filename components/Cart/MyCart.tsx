import React, { useRef, useState } from "react";
import Link from "next/link";
import { CartItem, SubTotal } from "./CartItem";
import formatMoney from "../Utils/formatMoney";
import RubberBand from "react-reveal/RubberBand";
import calcTotalPrice from "components/Utils/CalculateTotal";
import { useUser } from "components/Utils/auth";
import { useOnClickOutside } from "../Utils/ClickOutside";

interface Props {}

// This Component is bieng used in header.js component
const Cart = () => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false));

  const user = useUser();

  const TotalItems = user?.cart.reduce((tally: any, cartItem: any) => {
    return tally;
  }, 0);

  return (
    // @ts-ignore
    <div ref={ref} className={`cart-wrap ${isModalOpen && "show"} `}>
      <button onClick={() => setModalOpen(true)} className="icon-cart-active">
        <RubberBand spy={TotalItems}>
          <span className="icon-cart">
            <i className="sli sli-bag" />
            <span className="count-style">{TotalItems || 0}</span>
          </span>
          <span className="cart-price">
            {user && formatMoney(calcTotalPrice(user.cart))}
          </span>
        </RubberBand>
      </button>
      <div className={`shopping-cart-content ${isModalOpen && "show"}`}>
        <div className="shopping-cart-top">
          <h4>{user?.name}'s Shoping Cart</h4>
          <a className="cart-close" href="#">
            <i onClick={() => setModalOpen(false)} className="sli sli-close" />
          </a>
        </div>
        {/* CART Item Component */}
        <CartItem user={user} />

        <div className="shopping-cart-bottom">
          <SubTotal user={user} />

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
