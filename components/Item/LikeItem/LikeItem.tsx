import React from "react";
import { toast } from "react-toastify";
import { MDBIcon } from "mdbreact";
import Spinner from "react-bootstrap/Spinner";
import { useToggleLikeMutation } from "generated/graphql";
import { Me } from "components/Resolvers/AuthResolvers";
import { useUser } from "components/Utils/auth";

interface Props {
  id: string;
}

const LikeButton: React.FC<Props> = ({ id }) => {
  const user = useUser();
  const [ToggleLikeItem, { loading, error }] = useToggleLikeMutation({
    variables: { itemId: id },
    refetchQueries: [{ query: Me }],
  });

  if (loading)
    return (
      <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
    );

  if (!user) return null;

  // Find out if user already liked that item
  const Liked = user?.likes.map((like) => like.itemId);
  const ItemAlreadyLiked = Liked.includes(id);
  // Get Curent Like Id
  // here we will filter where Component(comming from query params) is equal to users likes item id
  const CurrentLikeIdArray = user?.likes.filter((like) => id === like.itemId);

  return (
    <div className="pro-details-wishlist">
      <a
        aria-disabled={loading}
        onClick={() =>
          // if the item is already liked we want to remove it
          ToggleLikeItem({
            variables: { itemId: id },

            // update: (cache, payload) => {
            //   const data = cache.readQuery({
            //     query: Me,
            //   });
            //   data.CurrentUser?.likes = data.CurrentUser.likes.filter(
            //     (like:any) => like.id !==id
            //   );
            //   cache.writeQuery({
            //     query: Me,
            //     data,
            //   });
            // },
          })
            .then(() =>
              toast.success("Success: Item is removed from your whislist")
            )
            .catch((err) => toast.error(err.message))
        }
        title="This item is Already in your Whishlist"
      >
        <MDBIcon style={{ color: "red" }} icon="heart" />
      </a>
    </div>
  );
};

export default LikeButton;
