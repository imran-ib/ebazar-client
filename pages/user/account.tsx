import React from "react";
import Account from "components/Account/UserAccount/Account";
import Layout from "components/Layout/Layout";
import { useUser } from "components/Utils/auth";
import { useRouter } from "next/router";
import Head from "next/head";

const UserAccountPage = () => {
  const router = useRouter();
  const user = useUser();
  if (user !== null) router.replace("/user/profile");
  return (
    <Layout>
      <Head>
        <title>ebazar | User Account </title>
      </Head>
      <Account />
    </Layout>
  );
};

export default UserAccountPage;
