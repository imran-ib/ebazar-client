import React from "react";
import { Item } from "generated/graphql";
import { ApolloError } from "apollo-client";
import { toast } from "react-toastify";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

//NOTE Just For Future Reference
//NOTE This component is not in use. Cursor is being used directly in components where it needed.
//NOTE The Cursor is being used (Pages -> List)
interface Props {
  items: Item[] | undefined;
  loading: boolean;
  error: ApolloError | undefined;
  fetchMore: any;
  edges: any;
  pagesInfo: any;
}

const Cursor: React.FC<Props> = (props) => {
  const OnLoadMore = () => {
    props.fetchMore({
      variables: {
        after: props?.edges,
      },

      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        const newEdges = fetchMoreResult.ItemConnections.edges;
        const pageInfo = fetchMoreResult.ItemConnections.pageInfo;

        const data = {
          __typename: previousResult?.ItemConnections.__typename,
          edges: [...previousResult?.ItemConnections.edges, ...newEdges],
          pageInfo,
        };
        console.log("OnLoadMore -> data", data.pageInfo);
        console.log("Props", props.edges);
        return newEdges?.length
          ? {
              ItemConnections: { ...data },
            }
          : previousResult;
      },
    });
    console.log("Called");
    if (!props.pagesInfo.hasNextPage) {
      toast.info("No More Items To Show");
    }
  };

  useBottomScrollListener(OnLoadMore);

  if (!props.pagesInfo?.hasNextPage) {
    return (
      <div className="alert alert-info text-center" role="alert">
        Page Ends Here!
      </div>
    );
  } else {
    return <> </>;
  }
};

export default Cursor;
