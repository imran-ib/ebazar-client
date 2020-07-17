import React, { ReactElement } from "react";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import SellerVification from "components/Account/SellerAccount/SellerRegistration/SellerVerification/SellerVerification";
import Head from "next/head";

interface Props {}

export default function verification({}: Props): ReactElement {
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
