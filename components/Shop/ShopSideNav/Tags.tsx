import React from "react";
import Link from "next/link";

const SideNavTags = () => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Tag </h4>
      <div className="sidebar-widget-tag mt-25">
        <ul>
          {Tags.map((tag, i) => (
            <li key={i}>
              <Link href={`/shop/list/results/tag/${tag}`}>
                <a>{tag}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Tags = [
  "Clothing",
  "Men",
  "Women",
  "Shirts",
  "Shoes",
  "Socks",
  "Bags",
  "Purses",
  "Jewelry",
  "Accessories",
];
export default SideNavTags;
