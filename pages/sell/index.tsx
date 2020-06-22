import React, { ReactElement } from "react";
import Layout from "components/Layout/Layout";
import SellerAuth from "components/Account/Auth/Seller/SellerAuth";
import Sell from "components/Sell/Sell";

interface Props {}

function SellPage({}: Props): ReactElement {
  return (
    <Layout>
      <SellerAuth>
        <Sell />
      </SellerAuth>
    </Layout>
  );
}

export default SellPage;
