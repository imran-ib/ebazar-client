import React from "react";

const NewAccount = () => {
  return (
    <div>
      <div className="checkout-account mb-25">
        <input className="checkout-toggle2" type="checkbox" />
        <span>Create an account?</span>
      </div>

      <div className="checkout-account-toggle open-toggle2 mb-30">
        <label>Email Address</label>
        <input placeholder="Password" type="password" />
      </div>
    </div>
  );
};

export default NewAccount;
