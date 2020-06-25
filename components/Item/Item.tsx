import React from "react";
import ItemOverview from "./ItemOverview/ItemOverview";
import ItemDescription from "./ItemDescription/ItemDescription";
// import RelatedProducts from "./RelatedProducts/RelatedProducts";
import ErrorMessage from "../Utils/ErrorMessage";
import Spinner from "../Utils/Spinner/Spinner";
import { useItemQuery } from "generated/graphql";

interface Props {
  id: any;
}

const ItemComponent: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useItemQuery({
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  const item = data?.item;

  if (!item)
    return <h1 style={{ textAlign: "center" }}>Sorry! Item Not Found</h1>;

  return (
    <div style={{ overflow: "hidden" }}>
      {/* 
    //@ts-ignore */}
      <ItemOverview item={item} />
      {/* 
    //@ts-ignore */}
      <ItemDescription item={item} />
      {/* <RelatedProducts /> */}
    </div>
  );
};

export default ItemComponent;
