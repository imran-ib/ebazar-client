import React from "react";
import { useRouter } from "next/router";
import ErrorMessage from "../../Utils/ErrorMessage";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import { useDeleteItemMutation } from "generated/graphql";
import { useSeller } from "components/Utils/auth";
import { Items } from "components/Resolvers/ItemResolvers";

interface Props {
  id: string;
}

const DeleteItem: React.FC<Props> = ({ id }) => {
  const Seller = useSeller();
  const Router = useRouter();
  const [deleteItem, { loading, error }] = useDeleteItemMutation({
    variables: { itemId: id },
    refetchQueries: [{ query: Items }],
  });
  if (!Seller) return null;

  if (loading)
    return (
      <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
    );

  const itemIds = Seller.items.map((item) => item.id);
  const ownsItem = itemIds.includes(id);

  if (!ownsItem) return null;
  return (
    <div className="pro-details-compare">
      <ErrorMessage error={error} />
      <a
        onClick={() => {
          if (
            confirm(
              "Are You Sure You Want To Delete This Item, \n This Action is Undoable"
            )
          ) {
            deleteItem().then(() => {
              Router.push("/shop");
              toast.success(`Success: Item Has Been Deleted`);
            });
          }
        }}
        title="Remove This Item"
      >
        <i className="sli sli-trash" />
      </a>
    </div>
  );
};

export default DeleteItem;
