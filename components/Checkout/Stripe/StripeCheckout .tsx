import React from "react";
import StripeCheckout from "react-stripe-checkout";
import calcTotalPrice from "../../Utils/CalculateTotal";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { toast } from "react-toastify";
import { useUser } from "components/Utils/auth";
import { useCreateOrderMutation, CurrentUserDocument } from "generated/graphql";

interface Props {
  children: React.ReactNode;
}
const StripeCheckoutComponent: React.FC<Props> = (props) => {
  const user = useUser();
  const Router = useRouter();
  const [CreateOrder, { loading }] = useCreateOrderMutation({
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  if (!user) return null;
  if (loading) return <p>loading..</p>;

  const totalAmount = calcTotalPrice(user.cart);
  const TotalItems = user.cart.reduce((tally, cartItem) => {
    return tally + cartItem.quantity;
  }, 0);

  const onToken = (res: any) => {
    NProgress.start();
    CreateOrder({
      variables: {
        token: res.id,
      },
    })
      .then((data) => {
        toast.success("Success: We Hope You Like That item");
        Router.push({
          pathname: "/order",
          query: { id: data?.data?.CreateOrder?.id },
        });
      })
      .catch((err) => toast.error(err.message));
  };

  if (!user.cart.length)
    return (
      <button className="btn btn-danger btn-block" disabled={true}>
        Your Don't Have Any Items in your Cart
      </button>
    );
  return (
    <StripeCheckout
      amount={totalAmount}
      name="ebazar"
      description={`Total Charge of ${TotalItems} items`}
      // @ts-ignore
      image={
        user.cart.length &&
        user.cart[0].item &&
        user.cart[0].item.eagerImages[0]
      }
      //TODO Move it To .evn
      stripeKey="pk_test_wCdgJEfYRs39f0NgD4CrbglZ"
      email={user && user.email}
      panelLabel="Total Charge"
      currency="USD"
      token={(res: any) => onToken(res)}
    >
      {props.children}
    </StripeCheckout>
  );
};

export default StripeCheckoutComponent;
