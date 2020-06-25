export default function calcTotalPrice(cart: any) {
  return cart?.reduce(
    (
      tally: number,
      cartItem: { item: { price: number }; quantity: number }
    ) => {
      if (!cartItem.item) return tally;
      return tally + cartItem.quantity * cartItem.item.price;
    },
    0
  );
}
