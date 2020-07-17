import React from "react";
import SingleOrder from "components/Checkout/SingleOrder/SingleOrder";
import Layout from "components/Layout/Layout";
import UserAuth from "components/Account/Auth/User/UserAuth";
// using Head --> title in components/Checkout/SingleOrder/SingleOrder

interface Props {}

const OrderPage = (props: Props) => {
  return (
    <Layout>
      <UserAuth>
        <SingleOrder />
      </UserAuth>
    </Layout>
  );
};

export default OrderPage;
