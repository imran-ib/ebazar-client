import React from "react";
import SellerLogin from "components/Account/SellerAccount/SellerLogin";
import Layout from "components/Layout/Layout";

import styled from "styled-components";
const PageStyles = styled.div`
  margin-top: 20vh;
`;

interface Props {}

const SellerLoginPage = (props: Props) => {
  return (
    <Layout>
      <PageStyles>
        <SellerLogin />
      </PageStyles>
    </Layout>
  );
};

export default SellerLoginPage;
