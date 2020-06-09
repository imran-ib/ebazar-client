import React from "react";
import Account from "components/Account/UserAccount/Account";
import { useUser } from "components/Utils/auth";

interface Props {
  children?: any;
}

const PleaseLogin: React.FC<Props> = (props) => {
  const user = useUser();

  if (!user) {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Please Sign In before Continuing
        </h2>
        <Account />
      </>
    );
  }
  return props.children;
};

export default PleaseLogin;
