import React from "react";
import {
  useSellerItemsQuery,
  useDeleteItemMutation,
  SellerItemsDocument,
} from "generated/graphql";
import { useSeller } from "components/Utils/auth";
import Spinner from "components/Utils/Spinner/Spinner";
import Link from "next/link";
import { toast } from "react-toastify";

function AllItems() {
  const seller = useSeller();

  const { data, loading } = useSellerItemsQuery({
    variables: {
      SellerId: seller?.id,
    },
  });
  if (loading) return <Spinner />;
  if (!data?.items.length) {
    return (
      <>
        <h1>You Don't Have Any Items Yet</h1>
        <Link href="/sell">
          <a>Create Item Now</a>
        </Link>
      </>
    );
  }
  return (
    <>
      {data?.items.map((item, i) => (
        <ItemCard
          key={item.id}
          item={item}
          count={i + 1}
          SellerId={seller?.id}
        />
      ))}
    </>
  );
}

const ItemCard = ({ item, count, SellerId }: any) => {
  const [DeleteItem, { loading }] = useDeleteItemMutation({
    refetchQueries: [
      { query: SellerItemsDocument, variables: { SellerId: SellerId } },
    ],
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
