import React from "react";
import Fade from "react-reveal/Fade";
import {
  useDeleteCartItemMutation,
  CurrentUserDocument,
} from "generated/graphql";
import formatMoney from "components/Utils/formatMoney";
import Spinner from "react-bootstrap/Spinner";

interface Props {
  user: any;
}

const CartItem: React.FC<Props> = ({ user }) => {
  const [DeleteCartItem, { loading }] = useDeleteCartItemMutation();
  if (loading) return <Spinner animation="border" size="sm" variant="danger" />;

  if (!user || !user.cart || !user.cart.length)
    return <p>You Don't Have Any Items In Your Cart</p>;

  return (
    <>
      <ul style={{ minHeight: "350px" }}>
        {user &&
          user.cart.map((item: any) => (
            <li key={item.id} className="single-shopping-cart">
              <div className="shopping-cart-img">
                <Fade>
                  <a>
                    {item.item.eagerImages ? (
                      <img
                        src={item && item.item.eagerImages[0]}
                        alt={item.item.title}
                      />
                    ) : (
                      <img
                        src="static/img/no-image-available.jpg"
                        alt={item.item.title}
                      />
                    )}
                  </a>
                </Fade>
                <div className="item-close " style={{ marginLeft: "12rem" }}>
                  <a
                    onClick={() => {
                      if (
                        confirm(
                          "Are you sure You want to delete this item from your cart"
                        )
                      ) {
                        const id = item.item.id;

                        DeleteCartItem({
                          variables: { cartItemId: id },
                          refetchQueries: [{ query: CurrentUserDocument }],
                        });
                      }
                    }}
                  >
                    <i className="sli sli-close " />
                  </a>
                </div>
              </div>
              <div className="shopping-cart-title">
                <h4>
                  <a>{item.item.title} </a>
                </h4>
                <span>
                  {item.quantity} x {formatMoney(item.item.price)}
                </span>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

const SubTotal = () => {
  return <div>Subtotal</div>;
};

export { CartItem, SubTotal };
