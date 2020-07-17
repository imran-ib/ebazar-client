import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import SellerResetPassword from "components/Account/SellerAccount/SellerPasswordReset/SellerResetPassword";
import Head from "next/head";

interface Props {}

export default function SellerResetPasswordPage({}: Props): ReactElement {
  const router = useRouter();
  const { token } = router.query;
  return (
    <Layout>
      {" "}
      <Head>
        <title>ebazar | reset password</title>
      </Head>
      <SellerResetPassword token={token} />
    </Layout>
  );
}
