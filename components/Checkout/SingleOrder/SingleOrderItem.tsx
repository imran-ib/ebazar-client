import React from "react";
import formatMoney from "../../Utils/formatMoney";
import { OrderItem } from "generated/graphql";

interface Props {
  item: OrderItem;
}

const SingleOrderItem: React.FC<Props> = ({ item }) => {
  return (
    <tr>
      <td className="product-thumbnail">
        <a href="#">
          {item.images[0] ? (
            <img width="150" src={item.images[0]} alt={item.title} />
          ) : (
            <img
              width="150"
              src="static/img/no-image-available.jpg"
              alt={item.title}
            />
          )}
        </a>
      </td>
      <td className="product-name">
        <a href="#">{item.title}</a>
      </td>
      <td className="product-price-cart">
        <span className="amount">{formatMoney(item.price)}</span>
      </td>

      <td className="product-quantity">
        <div className="cart-plus-minus">
          <input
            className="cart-plus-minus-box"
            type="text"
            name="qtybutton"
            defaultValue={item?.quantity}
          />
        </div>
      </td>
      <td className="product-subtotal">
        {formatMoney(item.price * item.quantity)}
      </td>
      <td className="product-remove">
        <a onClick={() => alert("This Order Can Not Ba Cancelled")}>Cancel</a>
      </td>
    </tr>
  );
};

export default SingleOrderItem;
