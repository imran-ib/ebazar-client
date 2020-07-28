import React from "react";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import UserResetPasswordForm from "components/Account/UserAccount/UserPasswordReset/UserResetPasswordForm";
import Head from "next/head";

const UserResetPasswordPage = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <Layout>
      <Head>
        <title>ebazar | Reset Password</title>
      </Head>
      <UserResetPasswordForm token={token} />
    </Layout>
  );
};

export default UserResetPasswordPage;
