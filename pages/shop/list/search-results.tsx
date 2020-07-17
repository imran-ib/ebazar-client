import React, { useState } from "react";
import { useSearchTermResultQuery } from "generated/graphql";
import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import PaginationHeader from "components/Pagination/PaginationHeader";
import ShopListItem from "components/ShopList/ShopListItem";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import Head from "next/head";

interface Props {}

const ShopListPage: React.FC<Props> = () => {
  const [orderBy, setOrderBy] = useState({});
  const Router = useRouter();
  const { term }: any = Router.query;

  const { loading, data, fetchMore } = useSearchTermResultQuery({
    variables: {
      term: term,
    },
  });

  const items = data?.SearchTermResults.edges;
  const edges = data?.SearchTermResults.pageInfo.endCursor;
  const pagesInfo = data?.SearchTermResults.pageInfo;
  const text = term;

  return (
    <Layout>
      <Head>
        <title>ebazar | Search results</title>
      </Head>
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
        <button
          disabled={loading}
          className="btn btn-info btn-block"
          onClick={() => {
            fetchMore({
              variables: {
                after: edges,
              },
              updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
                fetchMoreResult.SearchTermResults.edges = [
                  ...previousResult?.SearchTermResults.edges,
                  ...fetchMoreResult?.SearchTermResults.edges,
                ];

                return fetchMoreResult;
              },
            });
            if (!pagesInfo?.hasNextPage) {
              toast.info("No More Items To Show");
            }
          }}
        >
          {loading && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {loading ? "Fetching... Please Wait" : "Load More"}
        </button>
      </div>
    </Layout>
  );
};

export default ShopListPage;

// ==> shop/list/search-results?term=a
