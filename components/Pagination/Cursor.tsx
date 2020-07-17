import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Item } from "generated/graphql";
import { ApolloError } from "apollo-client";
import { toast } from "react-toastify";

interface Props {
  items: Item[] | undefined;
  loading: boolean;
  error: ApolloError | undefined;
  fetchMore: any;
  edges: any;
  pagesInfo: any;
}

const Cursor: React.FC<Props> = (props) => {
  return (
    <button
      disabled={props.loading}
      className="btn btn-info btn-block"
      onClick={() => {
        props.fetchMore({
          variables: {
            after: props?.edges,
          },
          updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
            fetchMoreResult.ItemConnections.edges = [
              ...previousResult?.ItemConnections.edges,
              ...fetchMoreResult?.ItemConnections.edges,
            ];

            return fetchMoreResult;
          },
        });
        if (!props.pagesInfo.hasNextPage) {
          toast.info("No More Items To Show");
        }
      }}
    >
      {props.loading && (
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      )}
      {props.loading ? "Fetching... Please Wait" : "Load More"}
    </button>
  );
};

export default Cursor;
