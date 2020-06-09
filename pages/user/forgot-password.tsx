import React from "react";
import UserForgotPasswordInput from "components/Account/UserAccount/UserPasswordReset/ForgotPasswordInput";
import Layout from "components/Layout/Layout";

interface Props {}

const ForgotPasswordPage = (props: Props) => {
  return (
    <Layout>
      {" "}
      <UserForgotPasswordInput />{" "}
    </Layout>
  );
};

export default ForgotPasswordPage;
