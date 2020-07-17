import React from "react";
import { useItemsConnectionsQuery } from "generated/graphql";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import ShopList from "components/ShopList/ShopList";
import Head from "next/head";

interface Props {}
// This component is responsible for rendering dynamic query (search by tag or search by category)
// search-results page is rendering result by any search term

const ShopListTermPage = (props: Props) => {
  const Router = useRouter();
  const { term }: any = Router.query;
  const { text }: any = Router.query;

  const TAGS = term === "tag";
  const CATEGORY = term === "category";

  // Conditional query weather the {term} is tag or category or search
  // skip to skip the query if it is not what we want
  const {
    data: CATEGORY_DATA,
    fetchMore: CATEGORY_fetchMore,
    loading: CATEGORY_Loading,
    error: CATEGORY_error,
  } = useItemsConnectionsQuery({
    // if we are not on category route skip this query
    skip: !CATEGORY,
    variables: {
      category: text,
    },
  });
  const {
    data: TAGS_DATA,
    fetchMore: TAGS_fetchMore,
    loading: TAGS_Loading,
    error: TAGS_error,
  } = useItemsConnectionsQuery({
    skip: !TAGS,
    variables: {
      tag: text,
    },
  });

  const Items =
    TAGS_DATA?.ItemConnections.edges || CATEGORY_DATA?.ItemConnections.edges;

  const loading = TAGS_Loading || CATEGORY_Loading;
  const error = TAGS_error || CATEGORY_error;
  const fetchMore = CATEGORY_fetchMore || TAGS_fetchMore;

  const edges =
    TAGS_DATA?.ItemConnections.pageInfo.endCursor ||
    CATEGORY_DATA?.ItemConnections.pageInfo.endCursor;

  const pagesInfo =
    CATEGORY_DATA?.ItemConnections.pageInfo ||
    TAGS_DATA?.ItemConnections.pageInfo;
  return (
    <Layout>
      <Head>
        <title>
          {" "}
          results for {term.toUpperCase()} | {text}
        </title>
      </Head>
      <ShopList
        items={Items}
        loading={loading}
        error={error}
        fetchMore={fetchMore}
        edges={edges}
        pagesInfo={pagesInfo}
        text={text}
        term={term}
      />
    </Layout>
  );
};

export default ShopListTermPage;

// ==> shop/list/results/tag/fashion
// ==> shop/list/results/category/apple
