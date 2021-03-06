import React from "react";
import Layout from "components/Layout/Layout";
import UserAuth from "components/Account/Auth/User/UserAuth";
import Wishlist from "components/WishList/Wishlist";

// using Head --> title in components/WishList/Wishlist

const WishListPage = () => {
  return (
    <Layout>
      <UserAuth>
        <Wishlist />
      </UserAuth>
    </Layout>
  );
};

export default WishListPage;
