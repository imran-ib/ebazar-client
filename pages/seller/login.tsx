import React from "react";
import SellerLogin from "components/Account/SellerAccount/SellerLogin";
import Layout from "components/Layout/Layout";

import styled from "styled-components";
import Head from "next/head";
const PageStyles = styled.div`
  margin-top: 20vh;
`;

const SellerLoginPage = () => {
  return (
    <Layout>
      <Head>
        <title>ebazar | Seller Login</title>
      </Head>
      <PageStyles>
        <SellerLogin />
      </PageStyles>
    </Layout>
  );
};

export default SellerLoginPage;
