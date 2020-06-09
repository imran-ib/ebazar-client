import React, { useState } from "react";
import UserOrders from "./Orders";
import UserDashboard from "./Dashboard";
import UserPaymentMethod from "./PaymentMethod";
import UserAddress from "./Address";
import UserAccountDetails from "./AccountDetails";
import UserDactivate from "./UserDeActivate";
import UserAccountSideNav from "./UserAccountSideNav";
import { useUser } from "components/Utils/auth";

const MyAccount = () => {
  const [Dashboard, setDashboard] = useState(true);
  const [Orders, setOrders] = useState(false);
  const [Dactivate, setDactivate] = useState(false);
  const [Payment, setPayment] = useState(false);
  const [Account, setAccount] = useState(false);
  const [Address, setAddress] = useState(false);

  const ActiveDashboard = () => {
    setDashboard(true);
    setOrders(false);
    setDactivate(false);
    setPayment(false);
    setAccount(false);
    setAddress(false);
  };
  const ActiveOrders = () => {
    setDashboard(false);
    setOrders(true);
    setDactivate(false);
    setPayment(false);
    setAccount(false);
    setAddress(false);
  };
  const ActiveDactivate = () => {
    setDashboard(false);
    setOrders(false);
    setDactivate(true);
    setPayment(false);
    setAccount(false);
    setAddress(false);
  };
  const ActivePayment = () => {
    setDashboard(false);
    setOrders(false);
    setDactivate(false);
    setPayment(true);
    setAccount(false);
    setAddress(false);
  };
  const ActiveAccount = () => {
    setDashboard(false);
    setOrders(false);
    setDactivate(false);
    setPayment(false);
    setAccount(true);
    setAddress(false);
  };
  const ActiveAddress = () => {
    setDashboard(false);
    setOrders(false);
    setDactivate(false);
    setPayment(false);
    setAccount(false);
    setAddress(true);
  };

  const CurrentUser = useUser();
  if (!CurrentUser) return null;

  return (
    <>
      <div className="my-account-wrapper pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="myaccount-page-wrapper">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="myaccount-tab-menu nav" role="tablist">
                      <UserAccountSideNav
                        Dashboard={Dashboard}
                        Orders={Orders}
                        Dactivate={Dactivate}
                        Payment={Payment}
                        Account={Account}
                        Address={Address}
                        ActiveDashboard={ActiveDashboard}
                        ActiveOrders={ActiveOrders}
                        ActiveDactivate={ActiveDactivate}
                        ActivePayment={ActivePayment}
                        ActiveAccount={ActiveAccount}
                        ActiveAddress={ActiveAddress}
                      />
                    </div>
                  </div>

                  <div className="col-lg-9 col-md-8">
                    {CurrentUser && (
                      <div className="tab-content" id="myaccountContent">
                        <UserDashboard me={CurrentUser} Dashboard={Dashboard} />
                        <UserOrders me={CurrentUser} Orders={Orders} />
                        <UserDactivate me={CurrentUser} Dactivate={Dactivate} />
                        <UserPaymentMethod me={CurrentUser} Payment={Payment} />
                        <UserAddress
                          CurrentUser={CurrentUser}
                          Address={Address}
                        />
                        <UserAccountDetails
                          me={CurrentUser}
                          Account={Account}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
