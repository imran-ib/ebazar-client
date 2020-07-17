import React from "react";

interface Props {
  Payment: boolean;
  me: any;
}

const UserPaymentMethod = ({ Payment, me }: Props) => {
  return (
    <div
      className={`tab-pane fade show ${Payment ? "active" : ""}`}
      id="payment-method"
      role="tabpanel"
    >
      <div className="myaccount-content">
        <h3>Payment Method</h3>
        <p className="saved-message">You Can't Save Your Payment Method yet.</p>
      </div>
    </div>
  );
};

export default UserPaymentMethod;
