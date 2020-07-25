import React from "react";
import Link from "next/link";
import { useSeller } from "components/Utils/auth";
//TODO Check if this component is being used because i moved edit item to seller dashboard
interface Props {
  id: string;
}

const EditItem: React.FC<Props> = ({ id }) => {
  const Seller = useSeller();
  if (Seller) return null;
  //@ts-ignore
  const itemIds: string[] = Seller && Seller.items.map((item: any) => item.id);
  const ownsItem = itemIds?.includes(id);
  if (!ownsItem) return null;
  return (
    <div className="pro-details-compare">
      <Link
        href={{
          pathname: "updateitem",
          query: { id: id },
        }}
      >
        <a title="Add To Wishlist" href="#">
          <i className="sli sli-pencil" />
        </a>
      </Link>
    </div>
  );
};

export default EditItem;
