import React from "react";
import Account from "components/Account/UserAccount/Account";
import Layout from "components/Layout/Layout";
import { useUser } from "components/Utils/auth";
import { useRouter } from "next/router";

interface Props {}

const UserAccountPage = (props: Props) => {
  const router = useRouter();
  const user = useUser();
  if (user !== null) router.replace("/user/profile");
  return (
    <Layout>
      <Account />
    </Layout>
  );
};

export default UserAccountPage;
