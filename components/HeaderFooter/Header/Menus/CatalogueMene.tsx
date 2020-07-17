import React from "react";
import Link from "next/link";

//! give li Class of agel-shap and put span init

export const CatalogMenuHead = [
  {
    MainHead: "CLOTHES",
    list: [
      `New in`,
      `Coats& Jackets`,
      `Jeans`,
      `Dresses`,
      `Shorts New`,
      `Skirts`,
      `T-Shirts`,
      `SHOES`,
      `Boots`,
      `FLats`,
      `Heels`,
      `Sandals`,
    ],
  },

  {
    MainHead: "ACCESSORIES",
    list: [
      `All accessories`,
      `Bags & Purses`,
      `Scarves & Hats`,
      `Jewelry`,
      `Fragrance & Beauty`,
      `LINGERIE`,
      `Linger New`,
      `Slippers`,
      `NIGHTWEAR`,
      `Nightwear`,
      `Socks`,
    ],
  },
  {
    MainHead: "MIXED",
    list: [
      `New in`,
      `Jeans`,
      `Dresses`,
      `Shorts`,
      `Skirts`,
      `T-shirts`,
      `Boots`,
      `Flats`,
      `Heels`,
      `Sandals`,
      `Sports`,
      `Tights`,
    ],
  },
  {
    MainHead: `LINGERIE & NIGHTWEAR`,
    list: [`Linger New`, `Slippers`, `Nightwear`, `Socks`],
  },
];

function CatalogueMenu() {
  return (
    <>
      <li className="angle-shape">
        <Link href="/shop">
          <a> Catalogue</a>
        </Link>

        <ul className="mega-menu">
          {CatalogMenuHead.map((item: any, i: any) => (
            <li key={i}>
              <a className="menu-title">{item.MainHead}</a>

              <ul>
                {item.list.map((list: any, i: any) => (
                  <li key={i}>
                    <Link href={`/shop/list/results/tag/${list}`}>
                      <a>{list}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}

export default CatalogueMenu;
