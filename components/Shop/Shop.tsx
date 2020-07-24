import React, { useState } from "react";
import ShopSideNav from "./ShopSideNav/ShopSideNav";
import ShopItemsArea from "./ShopItemsArea/ShopItemsArea";
import ErrorMessage from "../Utils/ErrorMessage";
import { useItemsQuery } from "generated/graphql";
import Spinner from "components/Utils/Spinner/Spinner";
import { useRouter } from "next/router";
import PaginationHeader from "components/Pagination/PaginationHeader";
import PaginationFooter from "components/Pagination/PaginationFooter";
import isEmpty from "lodash.isempty";

const Shop = () => {
  const Router = useRouter();
  const { query } = Router;
  const [MinPrice, setMinPrice] = useState(0);
  const [MAxPrice, setMAxPrice] = useState(10000);
  const [orderBy, setOrderBy] = useState({});
  const [SendTrue, setSendTrue] = useState(false);

  //@ts-ignore
  const page = parseInt(query.page) || 1;

  const { loading, error, data } = useItemsQuery({
    variables: {
      skip: page * 6 - 6,
      first: 6,
      MinPrice: MinPrice * 100, // convert cents to dollor
      MaxPrice: MAxPrice * 100,
      //@ts-ignore
      orderBy: isEmpty(orderBy) ? { createdAt: "asc" } : orderBy,

      // if set OrderBy default`{ createdAt: "asc" }` then in PaginationHeader we can only use createdAt Sort
      // if set empty Object then apollo is sending orderBy:{} which causes error
    },
    onCompleted: (data: any) => {
      // We need this in PaginationHeader after each query Completion to set Sort State
      setSendTrue(true);
    },
  });
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  let items = data?.items;

  if (items && items.length < 1)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h3>SORRY!!! THERE ARE CURRENTLY NO ITEMS TO SHOW. </h3>
      </div>
    );

  return (
    <>
      <div className="shop-area pt-95 pb-100">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-9 ">
              <PaginationHeader
                orderBy={orderBy}
                setOrderBy={setOrderBy}
                page={page}
                SendTrue={SendTrue}
              />
              <ShopItemsArea items={items} />
              <PaginationFooter page={page} routeName="shop" />
            </div>

            <div className="col-lg-3">
              <ShopSideNav
                setMinPrice={setMinPrice}
                setMAxPrice={setMAxPrice}
                MinPrice={MinPrice}
                MAxPrice={MAxPrice}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
