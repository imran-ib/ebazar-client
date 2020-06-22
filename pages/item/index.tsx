import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout/Layout";
import ItemComponent from "../../components/Item/Item";

interface Props {}

function ItemPage({}: Props): ReactElement {
  const Router = useRouter();

  const { id } = Router.query;
  return (
    <Layout>
      {" "}
      <ItemComponent id={id} />{" "}
    </Layout>
  );
}

export default ItemPage;
