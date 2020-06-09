import React from "react";
import Link from "next/link";

export const CategoryMenuHead = [
  {
    MainHead: `Home Decor`,
    list: [
      `Wall Decor`,
      `Pillows & Throws`,
      `Window Treatments`,
      `Mirrors`,
      `Writing Instruments`,
      `Bookcases`,
      `Filing Cabinets`,
    ],
  },

  {
    MainHead: `Kitchen & Tabletop`,
    list: [
      `Coffee & Tea`,
      `Cooking & Baking`,
      `Cutlery & Cutting`,
      `Serving`,
      `Food Storage`,
      `bridger's 59" Floor Lamp`,
      `Miltiades 27" Table Lamp`,
    ],
  },
  {
    MainHead: `Coastal Living Room Furniture`,
    list: [
      `Washington Console Table`,
      `Afield Coffee Table`,
      `Banbury 2 Drawer End Table`,
      `Landowner 53" Tv Stand`,
      `Seven Swivel Barrel Chair`,
      `Enfield Credenza`,
    ],
  },
  {
    MainHead: `Industrial Decor`,
    list: [`Letter Block`, `Glass Sconce`, `Risa Storage Jar`, `Model Plane`],
  },
];

function CategoriesMenu() {
  return (
    <>
      <li className="angle-shape">
        <Link href="/shop">
          <a> Categories</a>
        </Link>

        <ul className="mega-menu">
          {CategoryMenuHead.map((item: any, i: any) => (
            <li key={i}>
              <a className="menu-title">{item.MainHead}</a>

              <ul>
                {item.list.map((list: any, i: any) => (
                  <li key={i}>
                    <Link
                      href={{
                        pathname: "searchByCatagory",
                        query: { catagory: `${list}` },
                      }}
                    >
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

export default CategoriesMenu;
