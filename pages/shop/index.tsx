import * as React from "react";
import Layout from "components/Layout/Layout";
import Shop from "components/Shop/Shop";
import Head from "next/head";

interface props {}

const ShopPage: React.FC<props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>welcome | Shop with ebazar</title>
      </Head>
      <Shop />
    </Layout>
  );
};

export default ShopPage;
