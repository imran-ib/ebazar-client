import * as React from "react";
import Layout from "components/Layout/Layout";
import Shop from "components/Shop/Shop";

interface IShopPageProps {}

const ShopPage: React.FunctionComponent<IShopPageProps> = (props) => {
  return (
    <Layout>
      <Shop />
    </Layout>
  );
};

export default ShopPage;
