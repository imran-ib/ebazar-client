import React from "react";
import Cart from "components/Cart/MyCart";
import Layout from "components/Layout/Layout";
import UserAuth from "components/Account/Auth/User/UserAuth";
// using Head --> title in components/Cart/MyCart

const mycart = () => {
  return (
    <Layout>
      <UserAuth>
        <Cart />
      </UserAuth>
    </Layout>
  );
};

export default mycart;
