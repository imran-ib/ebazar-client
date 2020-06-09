import React from "react";
import Layout from "components/Layout/Layout";
import SellerRequestRestPassword from "components/Account/SellerAccount/SellerPasswordReset/SellerRequestPasswordReset";

interface Props {}

const SellerForgotPasswordPage = (props: Props) => {
  return (
    <Layout>
      <SellerRequestRestPassword />
    </Layout>
  );
};

export default SellerForgotPasswordPage;
