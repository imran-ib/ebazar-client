import React from "react";
import Logout from "./Logout";
import { MDBIcon } from "mdbreact";

interface Props {
  Dashboard: any;
  Orders: any;
  Dactivate: any;
  Payment: any;
  Account: any;
  Address: any;
  ActiveDashboard: any;
  ActiveOrders: any;
  ActiveDactivate: any;
  ActivePayment: any;
  ActiveAccount: any;
  ActiveAddress: any;
}

const UserAccountSideNav = ({
  Dashboard,
  Orders,
  Dactivate,
  Payment,
  Account,
  Address,
  ActiveDashboard,
  ActiveOrders,
  ActiveDactivate,
  ActivePayment,
  ActiveAccount,
  ActiveAddress,
}: Props) => {
  return (
    <div className="myaccount-tab-menu nav" role="tablist">
      <a
        data-toggle="tab"
        onClick={ActiveDashboard}
        className={`${Dashboard ? "active" : ""}`}
      >
        <MDBIcon icon="desktop" />
        Dashboard
      </a>
      <a
        data-toggle="tab"
        onClick={ActiveOrders}
        className={`${Orders ? "active" : ""}`}
      >
        <i className="fa fa-cart-arrow-down" /> Orders
      </a>

      <a
        data-toggle="tab"
        onClick={ActivePayment}
        className={`${Payment ? "active" : ""}`}
      >
        <i className="fa fa-credit-card" /> Payment Method
      </a>
      <a
        data-toggle="tab"
        onClick={ActiveAddress}
        className={`${Address ? "active" : ""}`}
      >
        <i className="fa fa-map-marker" /> address
      </a>
      <a
        onClick={ActiveAccount}
        data-toggle="tab"
        className={`${Account ? "active" : ""}`}
      >
        <i className="fa fa-user" /> Account Details
      </a>

      <Logout />
      <a
        data-toggle="tab"
        onClick={ActiveDactivate}
        className={`${Dactivate ? "active" : ""}`}
      >
        <MDBIcon icon="trash-alt" /> Dactivate Your Account
      </a>
    </div>
  );
};

export default UserAccountSideNav;
