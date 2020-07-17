import React, { ReactElement } from "react";
import Layout from "components/Layout/Layout";
import Head from "next/head";

interface Props {}

export default function SellerDashboardPage({}: Props): ReactElement {
  return (
    <Layout>
      <Head>
        <title>ebazar | Dashboard</title>
      </Head>
      SellerDashboardPage
    </Layout>
  );
}
