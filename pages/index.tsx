import React from "react";
import Home from "../components/Home/Home";
import Layout from "components/Layout/Layout";
import { useItemsQuery } from "generated/graphql";
import Spinner from "components/Utils/Spinner/Spinner";
import Head from "next/head";

const HomePage = () => {
  const { loading, error, data } = useItemsQuery({
    variables: {
      first: 20,
      //@ts-ignore
      orderBy: { createdAt: "asc" },
    },
  });
  if (loading) return <Spinner />;
  if (error) return <p> {error.message} </p>;
  const items = data?.items;
  return (
    <Layout>
      <Head>
        <title> ebazar | Home </title>
      </Head>
      <Home items={items} />
    </Layout>
  );
};

export default HomePage;
