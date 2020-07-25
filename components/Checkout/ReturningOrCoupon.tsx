import React, { useState } from "react";
import { toast } from "react-toastify";
import Fade from "react-reveal/Fade";
import Link from "next/link";

const ReturningOrCoupon = () => {
  const [login, setLogin] = useState(false);
  const [coupon, setCoupon] = useState(false);
  return (
    <>
      <div className="customer-zone mb-20">
        <p className="cart-page-title">
          Returning customer?{" "}
          <a onClick={() => setLogin(!login)} className="checkout-click1">
            Click here to login
          </a>
        </p>
        <Fade delay={500} duration={1000}>
          <div
            style={{ display: login ? "block" : "none" }}
            className="checkout-login-info "
          >
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="sin-checkout-login">
                    <label>
                      Username or email address <span>*</span>
                    </label>
                    <input type="text" name="user-name" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="sin-checkout-login">
                    <label>
                      Passwords <span>*</span>
                    </label>
                    <input type="password" name="user-password" />
                  </div>
                </div>
              </div>
              <div className="button-remember-wrap">
                <button
                  disabled
                  onClick={() =>
                    toast.error(
                      `Please Logout and log back in with these details `
                    )
                  }
                  className="button"
                >
                  Login
                </button>
                <div className="checkout-login-toggle-btn">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
              </div>
              <div className="lost-password">
                <Link href="/user/reset-password">
                  <a>Lost your password?</a>
                </Link>
              </div>
            </form>
            <div className="checkout-login-social">
              <span>Login with:</span>
              <ul>
                <li>
                  <a
                    onClick={() =>
                      alert("This Feature is currently not available")
                    }
                    aria-disabled
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      alert("This Feature is currently not available")
                    }
                    aria-disabled
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      alert("This Feature is currently not available")
                    }
                    aria-disabled
                  >
                    Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
      <div className="customer-zone mb-20">
        <p className="cart-page-title">
          Have a coupon?{" "}
          <a onClick={() => setCoupon(!coupon)} className="checkout-click3">
            Click here to enter your code
          </a>
        </p>
        <div
          style={{ display: coupon ? "block" : "none" }}
          className="checkout-login-info3"
        >
          <Fade delay={500} duration={1000}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.error("Error: Your Coupon is either invalid or Expire");
              }}
              method="POST"
            >
              <input type="text" placeholder="Coupon code" />
              <input type="submit" value="Apply Coupon" />
            </form>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default ReturningOrCoupon;
