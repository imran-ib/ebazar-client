import React from "react";
import { useAdmin } from "components/Utils/auth";
import SellerLogin from "components/Account/SellerAccount/SellerLogin";
import Link from "next/link";

interface Props {
  children?: any;
}

const AdminAuth: React.FC<Props> = (props) => {
  const Admin = useAdmin();

  if (!Admin) {
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Sorry! You Are Not Admin 😒
        </h2>

        <SellerLogin />

        <Link href="/user/profile">
          <a className="btn btn-danger float-right mr-5">Or Sign in As User</a>
        </Link>
      </>
    );
  }
  return props.children;
};

export default AdminAuth;
