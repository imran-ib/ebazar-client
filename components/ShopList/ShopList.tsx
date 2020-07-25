import React, { useState } from "react";
import ShopListItem from "./ShopListItem";
import PaginationHeader from "components/Pagination/PaginationHeader";
import { ApolloError } from "apollo-client";

interface Props {
  items: any;
  loading: boolean;
  error: ApolloError | undefined;
  fetchMore: any;
  edges: string | null | undefined;
  pagesInfo: any;
  text: string;
  term?: string;
}

const ShopList: React.FC<Props> = (props) => {
  const [orderBy, setOrderBy] = useState({});
  const {
    items,
    loading,
    text,
    term,
  } = props;

  return (
    <div className="container">
      <PaginationHeader setOrderBy={setOrderBy} orderBy={orderBy} />
      {items &&
        items.map((item: any, i: any) => (
          <ShopListItem key={i} item={item.node} />
        ))}
      {!items?.length && !loading && (
        <h3 style={{ textAlign: "center", padding: "50px" }}>
          No Items Found for <b>{term} </b>: <b>{text}</b>
        </h3>
      )}
    </div>
  );
};

export default ShopList;
