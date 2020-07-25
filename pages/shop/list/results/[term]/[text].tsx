import React, { useState } from "react";
import { useItemsConnectionsQuery } from "generated/graphql";
import Layout from "components/Layout/Layout";
import Head from "next/head";
import { toast } from "react-toastify";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useRouter } from "next/router";
import PaginationHeader from "components/Pagination/PaginationHeader";
import ShopListItem from "components/ShopList/ShopListItem";

interface Props {}
// This component is responsible for rendering dynamic query (search by tag or search by category)
// search-results page is rendering result by any search term

const ShopListTermPage = (props: Props) => {
  const Router = useRouter();
  const { term }: any = Router.query;
  const { text }: any = Router.query;

  const TAGS = term === "tag";
  const CATEGORY = term === "category";

  return (
    <Layout>
      <Head>
        <title>
          {" "}
          results for {term.toUpperCase()} | {text}
        </title>
      </Head>
      {TAGS && <TagsSearch />}
      {CATEGORY && <CategorySearch />}
    </Layout>
  );
};

const TagsSearch = () => {
  const [orderBy, setOrderBy] = useState({});
  const [prevData, setPrevData] = useState([]);
  const Router = useRouter();
  const { term }: any = Router.query;
  const { text }: any = Router.query;

  const TAGS = term === "tag";
  const { data, fetchMore, loading, error } = useItemsConnectionsQuery({
    skip: !TAGS,
    variables: {
      tag: text,
    },
  });
  const OnLoadMore = () => {
    fetchMore({
      variables: {
        after: data?.ItemConnections.pageInfo.endCursor,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        const newEdges = fetchMoreResult?.ItemConnections?.edges;
        const pageInfo = fetchMoreResult?.ItemConnections?.pageInfo;
        setPrevData(previousResult?.ItemConnections?.edges);

        const data = {
          __typename: previousResult?.ItemConnections.__typename,
          edges: [...prevData, ...newEdges],
          pageInfo,
        };

        return newEdges.length ? { ItemConnections: data } : previousResult;
      },
    });
    if (!data?.ItemConnections.pageInfo.hasNextPage) {
      toast.info("No More Items To Show");
    }
  };

  const items = data?.ItemConnections.edges;
  useBottomScrollListener(OnLoadMore);

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
      <button onClick={OnLoadMore}>Load More</button>
      {!data?.ItemConnections.pageInfo.hasNextPage && (
        <div className="alert alert-info text-center" role="alert">
          Page Ends Here!
        </div>
      )}
    </div>
  );
};
const CategorySearch = () => {
  const [orderBy, setOrderBy] = useState({});
  const [prevData, setPrevData] = useState([]);
  const Router = useRouter();
  const { term }: any = Router.query;
  const { text }: any = Router.query;

  const CATEGORY = term === "category";
  const { data, fetchMore, loading } = useItemsConnectionsQuery({
    skip: !CATEGORY,
    variables: {
      tag: text,
    },
  });

  const OnLoadMore = () => {
    fetchMore({
      variables: {
        after: data?.ItemConnections.pageInfo.endCursor,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        const newEdges = fetchMoreResult?.ItemConnections?.edges;
        const pageInfo = fetchMoreResult?.ItemConnections?.pageInfo;
        setPrevData(previousResult?.ItemConnections?.edges);

        const data = {
          __typename: previousResult?.ItemConnections.__typename,
          edges: [...prevData, ...newEdges],
          pageInfo,
        };

        return newEdges.length ? { ItemConnections: data } : previousResult;
      },
    });
    if (!data?.ItemConnections.pageInfo.hasNextPage) {
      toast.info("No More Items To Show");
    }
  };

  const items = data?.ItemConnections.edges;
  useBottomScrollListener(OnLoadMore);

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
      <button onClick={OnLoadMore}>Load More</button>
      {!data?.ItemConnections.pageInfo.hasNextPage && (
        <div className="alert alert-info text-center" role="alert">
          Page Ends Here!
        </div>
      )}
    </div>
  );
};
export default ShopListTermPage;

// ==> shop/list/results/tag/fashion
// ==> shop/list/results/category/apple
