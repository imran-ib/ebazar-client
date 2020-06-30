import React from "react";
import { useItemsQuery } from "generated/graphql";

interface Props {}

const ShopListPage = (props: Props) => {
  const { loading, error, data } = useItemsQuery({
    variables: {
      searchTerm: "a",
    },
  });
  if (loading) return <p>Loading</p>;
  console.log(data);
  return <div>ShopListPage</div>;
};

export default ShopListPage;
