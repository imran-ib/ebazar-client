import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";

import { CategoryMenuHead } from "../Menus/CategoriesMenu";
import { CatalogMenuHead } from "../Menus/CatalogueMene";
import PagesMenus from "../Menus/PagesMenus";
import { CurrentUser, CurrentSeller } from "components/Resolvers/AuthResolvers";
import { useUser, useSeller } from "components/Utils/auth";
import { useUserLogoutMutation } from "generated/graphql";
import SideNavSearch from "components/Shop/ShopSideNav/SideNavSearch";

function MobileMenus() {
  const [category, setCategory] = useState(false);
  const [catalog, setCatalog] = useState(false);
  const [pages, setPages] = useState(true);

  const user = useUser();
  const seller = useSeller();

  return (
    <>
      <div className="header-mobile-aside-wrap">
        <MyAccount user={user} seller={seller} />
        <SideNavSearch />

        <div className="mobile-menu-wrap">
          <div className="mobile-navigation">
            <nav>
              <ul className="mobile-menu d-flex flex-column">
                <li style={{ marginLeft: "17px" }}>
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                </li>
                <MDBDropdown>
                  <MDBDropdownToggle
                    onClick={() => setCategory(!category)}
                    nav
                    caret
                    color="white"
                  >
                    catagories
                  </MDBDropdownToggle>
                  <>{category && <CategoryMenus />}</>
                </MDBDropdown>

                <MDBDropdown>
                  <MDBDropdownToggle
                    onClick={() => setCatalog(!catalog)}
                    nav
                    caret
                    color="white"
                  >
                    Catalog
                  </MDBDropdownToggle>
                  {catalog && (
                    <>
                      <CatalogMenus />
                    </>
                  )}
                </MDBDropdown>

                <MDBDropdown>
                  <MDBDropdownToggle
                    onClick={() => setPages(!pages)}
                    nav
                    caret
                    color="white"
                  >
                    Take Me To
                  </MDBDropdownToggle>

                  {pages && (
                    <PagesMenus
                      user={user}
                      seller={seller}
                      showPagesLink={false}
                    />
                  )}
                </MDBDropdown>
                <hr />

                <li style={{ marginLeft: "12px" }}>
                  {" "}
                  <Link href="/contact">
                    <a>Contact us</a>
                  </Link>
                </li>
                <li style={{ marginLeft: "12px" }}>
                  {" "}
                  <Link href="/about">
                    <a>About us</a>
                  </Link>
                </li>
                <li style={{ marginLeft: "12px" }}>
                  {" "}
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <SocialLinks />
      </div>
    </>
  );
}

function MyAccount({ user, seller }: any) {
  const [UserLogout] = useUserLogoutMutation({
    refetchQueries: [{ query: CurrentUser }, { query: CurrentSeller }],
  });

  const Logout = () => {
    UserLogout();
    toast.success(`Success: Come Back Soon`);
    // Router.push("/shop");
  };
  const LoggedOutState = () => {
    return (
      <MDBNavItem
        style={{ float: "right", marginTop: "-12px", listStyle: "none" }}
      >
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <MDBIcon icon="user" />
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <Link href="/user/account">
              <MDBDropdownItem>Login/Register</MDBDropdownItem>
            </Link>
            <Link href="/seller/login">
              <MDBDropdownItem>Sell With Us</MDBDropdownItem>
            </Link>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    );
  };
  const UserLoggedInState = () => {
    return (
      <MDBNavItem
        style={{
          float: "right",
          marginTop: "-12px",
          marginBottom: "12px",
          listStyle: "none",
        }}
      >
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <span className="mr-2">
              <MDBIcon icon="user" className="mr-2" />{" "}
              {user?.email?.toUpperCase()}
            </span>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <Link href="/user/profile">
              <MDBDropdownItem>My Dashboard</MDBDropdownItem>
            </Link>
            <Link href="/seller/register">
              <MDBDropdownItem>Become A Seller</MDBDropdownItem>
            </Link>
            <MDBDropdownItem onClick={Logout}>Logout</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    );
  };
  const SellerLoggedInState = () => {
    return (
      <MDBNavItem
        style={{
          float: "right",
          marginTop: "-12px",
          marginBottom: "12px",
          listStyle: "none",
        }}
      >
        <MDBDropdown>
          <MDBDropdownToggle nav caret>
            <span className="mr-2">
              <MDBIcon icon="user" className="mr-2" />{" "}
              {seller?.email?.toUpperCase()}
            </span>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <Link href="/seller/dashboard">
              <MDBDropdownItem>My Dashboard</MDBDropdownItem>
            </Link>
            <Link href="/sell">
              <MDBDropdownItem>Create New Item</MDBDropdownItem>
            </Link>
            <Link href="/shop">
              <MDBDropdownItem onClick={Logout}>Logout</MDBDropdownItem>
            </Link>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavItem>
    );
  };
  return (
    <>
      {!user && !seller && <LoggedOutState />}
      {!seller && user && <UserLoggedInState />}
      {!user && seller && <SellerLoggedInState />}
    </>
  );
}

function CategoryMenus() {
  return (
    <>
      {CategoryMenuHead.map((item, i) => (
        <div key={i}>
          {item.list.map((list, i) => (
            <MDBDropdownItem key={i}>
              <Link
                href={{
                  pathname: "searchByCatagory",
                  query: { catagory: `${list}` },
                }}
              >
                <a>{list}</a>
              </Link>
            </MDBDropdownItem>
          ))}
        </div>
      ))}
    </>
  );
}

function CatalogMenus() {
  return (
    <>
      {CatalogMenuHead.map((item, i) => (
        <div key={i}>
          {item.list.map((list, i) => (
            <MDBDropdownItem key={i}>
              <Link
                href={{
                  pathname: "/searchByTag",
                  query: { tag: `${list}` },
                }}
              >
                <a>{list}</a>
              </Link>
            </MDBDropdownItem>
          ))}
        </div>
      ))}
    </>
  );
}

function SocialLinks() {
  return (
    <div className="mobile-social-wrap">
      <a className="facebook" target="_blank" href="https://www.facebook.com">
        <i className="sli sli-social-facebook" />
      </a>
      <a className="twitter" target="_blank" href="https://www.twitter.com">
        <i className="sli sli-social-twitter" />
      </a>
      <a className="pinterest" target="_blank" href="https://www.pinterest.com">
        <i className="sli sli-social-pinterest" />
      </a>
      <a className="instagram" target="_blank" href="https://www.instagram.com">
        <i className="sli sli-social-instagram" />
      </a>
      <a className="google" target="_blank" href="https://www.google.com">
        <i className="sli sli-social-google" />
      </a>
    </div>
  );
}
export default MobileMenus;
