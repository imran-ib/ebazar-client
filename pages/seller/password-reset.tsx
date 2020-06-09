import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import SellerResetPassword from "components/Account/SellerAccount/SellerPasswordReset/SellerResetPassword";

interface Props {}

export default function SellerResetPasswordPage({}: Props): ReactElement {
  const router = useRouter();
  const { token } = router.query;
  return (
    <Layout>
      {" "}
      <SellerResetPassword token={token} />
    </Layout>
  );
}
