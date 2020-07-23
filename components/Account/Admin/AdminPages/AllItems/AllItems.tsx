import React from "react";
import {
  useAllItemsQuery,
  AllItemsDocument,
  useDeleteItemMutation,
} from "generated/graphql";
import Spinner from "components/Utils/Spinner/Spinner";
import Link from "next/link";
import { toast } from "react-toastify";

function AllItems() {
  const { data, loading } = useAllItemsQuery();

  if (loading) return <Spinner />;
  const items = data?.AllItems.edges;

  if (!items?.length) {
    return (
      <>
        <h1>No Items found</h1>
        <Link href="/sell">
          <a>Create Item Now</a>
        </Link>
      </>
    );
  }
  return (
    <>
      {items?.map((item, i) => (
        <ItemCard key={item?.node.id} item={item?.node} count={i + 1} />
      ))}
    </>
  );
}

const ItemCard = ({ item, count }: any) => {
  const [DeleteItem, { loading }] = useDeleteItemMutation({
    refetchQueries: [{ query: AllItemsDocument }],
  });
  return (
    <div className="card">
      <div className="card-header">
        <strong>{count} -- </strong>
        <Link
          href={{
            pathname: "/item",
            query: { id: item.id },
          }}
        >
          <a>{item.title}</a>
        </Link>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <img
            width={200}
            src={item.images[0]}
            alt={item.title}
            className="mr-3"
          />
          <p className="card-text">{item.description}</p>
        </div>
        <div
          className="btn-group btn-group-sm float-right"
          role="group"
          aria-label="Basic example"
        >
          <Link
            href={{
              pathname: "/sell/update",
              query: { itemId: item.id },
            }}
          >
            <a type="button" className="btn btn-danger">
              Edit
            </a>
          </Link>
          <Link
            href={{
              pathname: "/item",
              query: { id: item.id },
            }}
          >
            <a type="button" className="btn btn-danger">
              View
            </a>
          </Link>
          <a
            onClick={() => {
              if (confirm("Are You Sure You Want To Delete This Item")) {
                DeleteItem({
                  variables: {
                    itemId: item.id,
                  },
                })
                  .then(() => toast.success(`Success! Item Deleted 🙂 `))
                  .catch((err) => toast.error(err.message));
              }
            }}
            type="button"
            className="btn btn-danger"
          >
            {loading ? "Deleting..." : "Delete"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
