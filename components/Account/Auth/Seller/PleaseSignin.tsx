import React from "react";
import { useSeller } from "components/Utils/auth";
import SellerLogin from "components/Account/SellerAccount/SellerLogin";

interface Props {
  children?: any;
}

const PleaseLogin: React.FC<Props> = (props) => {
  const Seller = useSeller();

  if (!Seller) {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Please Sign In before Continuing
        </h2>
        <SellerLogin />
      </>
    );
  }
  return props.children;
};

export default PleaseLogin;
