import React from "react";
import MyAccount from "components/Account/UserAccount/MyAccount/MyAccount";
import Layout from "components/Layout/Layout";
import UserAuth from "components/Account/Auth/User/UserAuth";

function accountPage() {
  return (
    <Layout>
      <UserAuth>
        <MyAccount />
      </UserAuth>
    </Layout>
  );
}

export default accountPage;
