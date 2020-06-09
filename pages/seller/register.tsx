import React from "react";
import SellerRegistration from "components/Account/SellerAccount/SellerRegistration/SellerRegistration";
import Layout from "components/Layout/Layout";

interface Props {}

const SellerRegisterPage = (props: Props) => {
  return (
    <Layout>
      <div className="container">
        <SellerRegistration />
      </div>
    </Layout>
  );
};

export default SellerRegisterPage;
