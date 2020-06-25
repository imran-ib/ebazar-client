import React, { useState } from "react";
import { toast } from "react-toastify";
import Styles from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import { useUser } from "components/Utils/auth";
import { useAddItemToCartMutation } from "generated/graphql";
import { CurrentUser } from "components/Resolvers/AuthResolvers";

const DisableLinkStyles = Styles.div`
a[aria-disabled='true'] {
  color: grey;
  pointer-events: none;
}
`;

interface Props {
  id: string;
  setToggle?: React.Dispatch<React.SetStateAction<number>>;
}

const AddToCartButton: React.FC<Props> = ({ id }) => {
  const [quantity, setQuantity] = useState(1);

  const [AddItemToTheCart, { loading, error }] = useAddItemToCartMutation({
    variables: { itemId: id, quantity: quantity },
    refetchQueries: [{ query: CurrentUser }],
  });
  const user = useUser();

  // if (error) return <p>{error.message}</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const Quantity = parseInt(e.currentTarget.value);
    return setQuantity(Quantity);
  };
  return (
    <>
      <div className="cart-plus-minus">
        <a onClick={() => setQuantity(quantity - 1)} className="dec qtybutton">
          -
        </a>
        <input
          value={quantity}
          onChange={(e) => handleChange(e)}
          className="cart-plus-minus-box"
          type="text"
          name="qtybutton"
        />
        <a onClick={() => setQuantity(quantity + 1)} className="inc qtybutton">
          +
        </a>
      </div>
      <div className="pro-details-cart btn-hover">
        <DisableLinkStyles>
          <a
            aria-disabled={loading}
            onClick={() =>
              AddItemToTheCart()
                .then(() =>
                  toast.success("Success, Item is Added To Your Cart")
                )
                .catch((err) => toast.error(err.message))
            }
          >
            {loading && (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}{" "}
            Add{loading ? "ing... Please Wait" : "To Cart"}
          </a>
        </DisableLinkStyles>
      </div>
    </>
  );
};

export default AddToCartButton;
