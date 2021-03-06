import React from "react";
import SellerRegistration from "components/Account/SellerAccount/SellerRegistration/SellerRegistration";
import Layout from "components/Layout/Layout";
import Head from "next/head";

const SellerRegisterPage = () => {
  return (
    <Layout>
      <Head>
        <title>ebazar | Register Seller</title>
      </Head>
      <div className="container">
        <SellerRegistration />
      </div>
    </Layout>
  );
};

export default SellerRegisterPage;
