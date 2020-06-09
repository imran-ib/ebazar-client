import React from "react";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import UserResetPasswordForm from "components/Account/UserAccount/UserPasswordReset/UserResetPasswordForm";

interface Props {}

const UserResetPasswordPage = (props: Props) => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <Layout>
      <UserResetPasswordForm token={token} />
    </Layout>
  );
};

export default UserResetPasswordPage;
