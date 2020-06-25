import React from "react";
import { toast } from "react-toastify";
import Styled from "styled-components";
import { MDBIcon } from "mdbreact";
import { useUserLogoutMutation } from "generated/graphql";
import { CurrentUser, CurrentSeller } from "components/Resolvers/AuthResolvers";

const LogoutStyles = Styled.a`
    font-size: 20px;
`;

const Logout = () => {
  const [UserLogout] = useUserLogoutMutation({
    refetchQueries: [
      {
        query: CurrentUser,
      },
      {
        query: CurrentSeller,
      },
    ],
  });

  const HandlerUserLogout = () => {
    try {
      UserLogout();
      toast.success(`Success: Come Back Soon`);
    } catch (error) {
      console.log("UserLogout -> error", error);
    }
  };

  return (
    <LogoutStyles
      onClick={() => {
        if (confirm(`Are You Sure You Want To Logout`)) {
          HandlerUserLogout();
        }
      }}
      className="logout"
    >
      <MDBIcon icon="sign-out-alt" /> Logout
    </LogoutStyles>
  );
};

export default Logout;
