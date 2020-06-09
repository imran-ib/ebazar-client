import React from "react";
import Home from "../components/Home/Home";
import Layout from "components/Layout/Layout";

interface Props {
  apollo: any;
}

const HomePage = (props: Props) => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
