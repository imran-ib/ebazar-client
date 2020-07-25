import React from "react";
import ReturningOrCoupon from "./ReturningOrCoupon";
import BillingDetails from "./Billing/BillingDetails";
import PlaceOrder from "./PlaceOrder";
import { useUser } from "components/Utils/auth";

// TODO Returning customer redirect to contact

const Checkout = () => {
  const user = useUser();
  return (
    <>
      {user && (
        <div className="checkout-main-area pt-70 pb-70">
          <div className="container">
            <ReturningOrCoupon />
            <div className="checkout-wrap pt-30">
              <div className="row">
                {user && (
                  <>
                    {/* 
                  //@ts-ignore */}
                    <BillingDetails user={user} />
                    {/* 
                  //@ts-ignore */}
                    <PlaceOrder user={user} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
