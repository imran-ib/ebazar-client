import React, { ReactElement } from "react";
import Layout from "components/Layout/Layout";
import SellerAuth from "components/Account/Auth/Seller/SellerAuth";
import UpdateItem from "components/Sell/SellForms/UpdateItem/UpdateItemForm";
import { useRouter } from "next/router";
import { useItemQuery } from "generated/graphql";
import ErrorMessage from "components/Utils/ErrorMessage";
import Spinner from "components/Utils/Spinner/Spinner";
import Head from "next/head";

interface Props {}

function SellPage({}: Props): ReactElement {
  const Router = useRouter();
  const { loading, error, data } = useItemQuery({
    //@ts-ignore
    variables: { id: Router.query.itemId },
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  const item = data?.item;

  if (!item)
    return <h1 style={{ textAlign: "center" }}>Sorry! Item Not Found</h1>;
  const { query } = Router;
  return (
    <Layout>
      <Head>
        <title>ebazar | Update Items</title>
      </Head>
      <SellerAuth>
        {/* 
        //@ts-ignore */}
        <UpdateItem item={item} />
      </SellerAuth>
    </Layout>
  );
}

export default SellPage;
