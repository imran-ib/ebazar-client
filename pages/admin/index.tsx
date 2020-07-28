import React from "react";
import AdminAuth from "components/Account/Auth/Admin/AdminAuth";
import Admin from "components/Account/Admin/Admin";
import AdminLayout from "components/Layout/AdminLayout";

const index = () => {
  return (
    <AdminLayout>
      <AdminAuth>
        <Admin />
      </AdminAuth>
    </AdminLayout>
  );
};

export default index;
