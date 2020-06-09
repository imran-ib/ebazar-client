import React, { ReactElement } from "react";
import MyAccount from "components/Account/UserAccount/MyAccount/MyAccount";
import Layout from "components/Layout/Layout";
import PleaseLogin from "components/Account/Auth/User/PleaseSingin";

interface Props {}

function accountPage({}: Props): ReactElement {
  return (
    <Layout>
      <PleaseLogin>
        <MyAccount />
      </PleaseLogin>
    </Layout>
  );
}

export default accountPage;
