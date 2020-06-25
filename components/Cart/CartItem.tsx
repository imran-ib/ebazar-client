import React from "react";
import { toast } from "react-toastify";
import Fade from "react-reveal/Fade";
import {
  useDeleteCartItemMutation,
  Item,
  CurrentUserDocument,
} from "generated/graphql";
import formatMoney from "components/Utils/formatMoney";

interface Props {
  user: any;
}

const CartItem: React.FC<Props> = ({ user }) => {
  const [DeleteCartItem, { loading, error }] = useDeleteCartItemMutation();
  if (loading) return <p>Please Wait</p>;

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
                        const id = item.id;

                        DeleteCartItem({
                          variables: { cartItemId: id },
                          refetchQueries: [{ query: CurrentUserDocument }],

                          // update: (cache, payload) => {
                          //   const data = cache.readQuery({
                          //     query: CurrentUserDocument,
                          //   });

                          //   cache.writeQuery({
                          //     query: CurrentUserDocument,
                          //     //@ts-ignore
                          //     data: data.CurrentUser.cart.filter(
                          //       (item: Item) => item.id !== id
                          //     ),
                          //   });
                          // },

                          // optimisticResponse: {
                          //   __typename: "Mutation",
                          //   //@ts-ignore
                          //   DeleteCartItem: {
                          //     __typename: "CartItem",
                          //     cartItemId: item.id,
                          //   },
                          // },
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

const SubTotal: React.FC<Props> = (props: Props) => {
  return <div>Subtotal</div>;
};

export { CartItem, SubTotal };
