import React from "react";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import SellerVification from "components/Account/SellerAccount/SellerRegistration/SellerVerification/SellerVerification";
import Head from "next/head";

export default function verification() {
  const router = useRouter();
  const { token } = router.query;
  return (
    <Layout>
      <Head>
        <title>ebazar | verify Seller</title>
      </Head>
      <SellerVification token={token} />
    </Layout>
  );
}
