import React from "react";
import Layout from "components/Layout/Layout";
import SellerRequestRestPassword from "components/Account/SellerAccount/SellerPasswordReset/SellerRequestPasswordReset";
import Head from "next/head";

interface Props {}

const SellerForgotPasswordPage = (props: Props) => {
  return (
    <Layout>
      <Head>
        <title>ebazar | reset password</title>
      </Head>
      <SellerRequestRestPassword />
    </Layout>
  );
};

export default SellerForgotPasswordPage;
