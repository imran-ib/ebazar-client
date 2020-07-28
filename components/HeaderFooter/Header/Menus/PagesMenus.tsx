import React from "react";
import Link from "next/link";
import { User, Seller } from "generated/graphql";

interface Props {
  // MobileMenus.tsx is giving error when i don't use type any
  user: User | any;
  seller: Seller | any;
  // Want To Hide Pages link on mobile
  showPagesLink?: boolean;
}

const PagesMenus: React.FC<Props> = ({ user, seller, showPagesLink }) => {
  return (
    <>
      {!user && !seller && <LoggedOutState />}

      {!seller && user && <UserLoggedInState showPagesLink={showPagesLink} />}

      {!user && seller && <SellerLoggedInState showPagesLink={showPagesLink} />}
    </>
  );
};

const LoggedOutState = () => {
  return (
    <li className="angle-shape">
      <div className="pro-details-compare">
        <a>
          More{" "}
          <i
            style={{
              fontSize: "10px",
            }}
            className="sli sli-arrow-down"
          />
        </a>
      </div>

      <ul className="submenu">
        <li>
          <Link href="/contact">
            <a> Contact </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a> About Us </a>
          </Link>
        </li>
      </ul>
    </li>
  );
};
const UserLoggedInState = ({ showPagesLink }: any) => {
  const Links = [
    {
      id: 1,
      to: "/sell",
      text: "Sell",
    },
    {
      id: 2,
      to: "/blog",
      text: "Blog",
    },
    {
      id: 3,
      to: "/mycart",
      text: "My Cart",
    },
    {
      id: 4,
      to: "/checkout",
      text: "Checkout",
    },
    {
      id: 5,
      to: "/wishlist",
      text: "Wishlist",
    },
    {
      id: 6,
      to: "/contact",
      text: "Contact",
    },
    {
      id: 7,
      to: "/about",
      text: "About Us",
    },
  ];
  return (
    <li className="angle-shape">
      {showPagesLink && (
        <div className="pro-details-compare">
          <a>
            More{" "}
            <i
              style={{
                fontSize: "10px",
              }}
              className="sli sli-arrow-down"
            />
          </a>
        </div>
      )}
      <ul className="submenu">
        {Links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>
              <a> {link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
const SellerLoggedInState = ({ showPagesLink }: any) => {
  const Links = [
    {
      id: 1,
      to: "/sell",
      text: "Sell",
    },
    {
      id: 2,
      to: "/seller/dashboard",
      text: "Dashboard",
    },
    {
      id: 3,
      to: "/item/create",
      text: "Create Item",
    },
    {
      id: 4,
      to: "/Contact",
      text: "Contact",
    },
    {
      id: 5,
      to: "/About",
      text: "About Us",
    },
  ];
  return (
    <li className="angle-shape">
      {showPagesLink && (
        <div className="pro-details-compare">
          <a>
            More{" "}
            <i
              style={{
                fontSize: "10px",
              }}
              className="sli sli-arrow-down"
            />
          </a>
        </div>
      )}
      <ul className="submenu">
        {Links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>
              <a> {link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default PagesMenus;
