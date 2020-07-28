import React from "react";
import Head from "next/head";
import Dashboard from "components/Account/SellerAccount/Dashboard/Dashboard";
import SellerAuth from "components/Account/Auth/Seller/SellerAuth";
import SellerLayout from "components/Layout/SellerLayout";

export default function SellerDashboardPage() {
  return (
    <SellerLayout>
      <SellerAuth>
        <Head>
          <title>ebazar | Dashboard</title>
        </Head>
        <Dashboard />
      </SellerAuth>
    </SellerLayout>
  );
}
