import React from "react";
import Layout from "components/Layout/Layout";
import UserAuth from "components/Account/Auth/User/UserAuth";
import Checkout from "components/Checkout/Checkout";
import Head from "next/head";

interface Props {}

const CheckOutPage = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title> ebazar | Checkout </title>
      </Head>
      <UserAuth>
        <Checkout />
      </UserAuth>
    </Layout>
  );
};

export default CheckOutPage;
