import React from "react";
import ItemCard from "components/Item/ItemCard/ItemCard";
import { Item } from "generated/graphql";

interface Props {
  item: Item;
}

const ShopItem: React.FC<Props> = ({ item }) => {
  return <ItemCard item={item} />;
};

export default ShopItem;
