import React from "react";
import UserForgotPasswordInput from "components/Account/UserAccount/UserPasswordReset/ForgotPasswordInput";
import Layout from "components/Layout/Layout";
import Head from "next/head";


const ForgotPasswordPage = () => {
  return (
    <Layout>
      {" "}
      <Head>
        <title>ebazar | Reset Password</title>
      </Head>
      <UserForgotPasswordInput />{" "}
    </Layout>
  );
};

export default ForgotPasswordPage;
