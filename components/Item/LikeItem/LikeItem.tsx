import React from "react";
import { MDBIcon } from "mdbreact";
import Spinner from "react-bootstrap/Spinner";
import { useToggleLikeMutation, CurrentUserDocument } from "generated/graphql";
import { useUser } from "components/Utils/auth";

interface Props {
  id: string;
}

const LikeButton: React.FC<Props> = ({ id }) => {
  const user = useUser();
  const [ToggleLikeItem, { loading, error }] = useToggleLikeMutation({
    variables: { itemId: id },
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  if (loading)
    return (
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (!user) return null;

  // Find out if user already liked that item
  const Liked = user?.likes.map((like) => like.itemId);
  const isLiked = Liked.includes(id);

  // Get Curent Like Id
  // here we will filter where Component(comming from query params) is equal to users likes item id
  const CurrentLikeIdArray = user?.likes.filter((like) => id === like.itemId);

  return (
    <div className="pro-details-wishlist">
      <a aria-disabled={loading} onClick={() => ToggleLikeItem()} title="like">
        {isLiked ? (
          <MDBIcon style={{ color: "red" }} icon="heart" />
        ) : (
          <MDBIcon far icon="heart" />
        )}
      </a>
    </div>
  );
};

export default LikeButton;
