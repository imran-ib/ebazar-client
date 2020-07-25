import React from "react";
import ShopListCard from "./ShopListCard/ShopListCard";

const ShopListItem: React.FC<any> = ({ item }) => {
  return <ShopListCard item={item} />;
};

export default ShopListItem;
