import React, { ReactElement } from "react";
import Layout from "components/Layout/Layout";
import PleaseLogin from "components/Account/Auth/Seller/PleaseSignin";

interface Props {}

function SellPage({}: Props): ReactElement {
  return (
    <Layout>
      <PleaseLogin>
        <h1>Sell</h1>
      </PleaseLogin>
    </Layout>
  );
}

export default SellPage;
