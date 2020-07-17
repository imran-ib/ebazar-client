import React from "react";
import ShopListCard from "./ShopListCard/ShopListCard";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
}

const ShopListItem: React.FC<any> = ({ item }) => {
  return <ShopListCard item={item} />;
};

export default ShopListItem;
