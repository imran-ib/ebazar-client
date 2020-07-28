import React from "react";
import Layout from "components/Layout/Layout";
import SellerAuth from "components/Account/Auth/Seller/SellerAuth";
import Sell from "components/Sell/Sell";
import Head from "next/head";

function SellPage() {
  return (
    <Layout>
      <Head>
        <title>ebazar | Sell Items</title>
      </Head>
      <SellerAuth>
        <Sell />
      </SellerAuth>
    </Layout>
  );
}

export default SellPage;
