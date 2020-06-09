import React from "react";
import { toast } from "react-toastify";
//@ts-ignore
import Pulse from "react-reveal/Pulse";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import Styles from "styled-components";
import Link from "next/link";
import media from "styled-media-query";
import { useUserLogoutMutation, Seller, User } from "generated/graphql";
import { Me, CurrentSeller } from "components/Resolvers/AuthResolvers";

const TopNavStyles = Styles.div`
font-size: 12px;
color: white;
list-style: none;

li a {
  color: white;
}

${media.lessThan("large")`
display: none;
`}

`;

interface Props {
  user: User;
  seller: Seller;
}

interface UserLoggedInStateProps {
  user: User;
  UserLogOutFunction?: () => void;
}
interface sellerLoggedInStateProps {
  seller: Seller;
  UserLogOutFunction?: () => void;
}

const Icons: { id: number; icon: string; text: string }[] = [
  {
    id: 1,
    icon: "truck",
    text: "Free Shipping",
  },
  {
    id: 2,
    icon: "reply",
    text: "Free Returns",
  },
  {
    id: 3,
    icon: "money-bill-alt",
    text: "Cash on Delivery",
  },
  {
    id: 4,
    icon: "gift",
    text: "Deals Everyday",
  },
  {
    id: 5,
    icon: "user-tie",
    text: "Reliable Sellers",
  },
  {
    id: 6,
    icon: "location-arrow",
    text: "Track Orders",
  },
  {
    id: 7,
    icon: "headset",
    text: "24 hrs Helpline",
  },
];

const TopNav = (props: Props) => {
  const [UserLogout] = useUserLogoutMutation({
    refetchQueries: [{ query: Me }, { query: CurrentSeller }],
  });
  const { user, seller } = props;

  const UserLogOutFunction = () => {
    UserLogout().then(() => {
      toast.success(`Success: Come Back Soon`);
    });
  };
  return (
    <TopNavStyles>
      <MDBNavbar color="unique-color-dark" dark>
        <div className="container">
          {Icons.map((icon) => (
            <Pulse key={icon.id} delay={1000} duration={2000} forever>
              <li>
                <MDBIcon size="lg" icon={icon.icon} /> {icon.text}
              </li>
            </Pulse>
          ))}

          {!user && !seller && <LoggedOutState />}
          {!seller && user && (
            <UserLoggedInState
              user={user}
              UserLogOutFunction={UserLogOutFunction}
            />
          )}
          {!user && seller && (
            <SellerLoggedInState
              seller={seller}
              UserLogOutFunction={UserLogOutFunction}
            />
          )}
        </div>
      </MDBNavbar>
    </TopNavStyles>
  );
};

const LoggedOutState = () => {
  return (
    <MDBNavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <span className="mr-2">My Account</span>
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

const UserLoggedInState = ({
  user,
  UserLogOutFunction,
}: UserLoggedInStateProps) => {
  return (
    <MDBNavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <span className="mr-2">{user?.name?.toUpperCase()}</span>
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <Link href="/user/profile">
            <MDBDropdownItem>My Dashboard</MDBDropdownItem>
          </Link>
          <Link href="/seller/login">
            <MDBDropdownItem>Become A Seller</MDBDropdownItem>
          </Link>
          <MDBDropdownItem onClick={UserLogOutFunction}>Logout</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavItem>
  );
};

const SellerLoggedInState = ({
  seller,
  UserLogOutFunction,
}: sellerLoggedInStateProps) => {
  return (
    <MDBNavItem>
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <span className="mr-2">{seller?.name?.toUpperCase()}</span>
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <Link href="/seller/dashboard">
            <MDBDropdownItem>My Dashboard</MDBDropdownItem>
          </Link>
          <Link href="/sell">
            <MDBDropdownItem>Create New Item</MDBDropdownItem>
          </Link>
          <Link href="/shop">
            <MDBDropdownItem onClick={UserLogOutFunction}>
              Logout
            </MDBDropdownItem>
          </Link>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavItem>
  );
};

export default TopNav;
