import React from "react";
import styled from "styled-components";
import ShopItem from "./ShopItem";
import { Item } from "generated/graphql";

interface Props {
  items: Item[] | undefined | any;
}

const ShopItemArea: React.FC<Props> = ({ items }) => {
  return (
    <div className="mt-35">
      <CustomStyles>
        {items?.map((item: Item, i: string | number | undefined) => (
          <div key={i} className="">
            <ShopItem item={item} />
          </div>
        ))}
      </CustomStyles>
    </div>
  );
};

const CustomStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: 10px;
`;

export default ShopItemArea;
