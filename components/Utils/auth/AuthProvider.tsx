import React, { createContext, useContext } from "react";
import { logout } from "./helpers";
import ErrorMessage from "../ErrorMessage";
import {
  useCurrentUserQuery,
  useCurrentSellerQuery,
  useIsAdminQuery,
} from "generated/graphql";
import Spinner from "../Spinner/Spinner";
import LoginForm from "components/Account/UserAccount/LoginForm";

type AuthContextParams = [{ data: any }, typeof logout];

export const AuthContext = createContext<AuthContextParams>([
  { data: null },
  logout,
]);

const AuthProvider: React.FC = ({ children }) => {
  const { data, loading, error } = useCurrentUserQuery();

  // Usually you don't see this, because we have no "loading" state on SSR
  if (loading) {
    return <Spinner />;
  }

  // JWT token expired or any API-level errors, you can use redirects here
  if (error) {
    console.error(error);

    return <ErrorMessage error={error} />;
  }

  if (!data?.CurrentUser) {
    console.log(data);
    return (
      <>
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Please Sign In before Continuing
        </h2>
        <h1> Login Form</h1>
        <LoginForm />
      </>
    );
  }

  return (
    <AuthContext.Provider value={[{ data }, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

function useUser() {
  const { loading, data, error, called } = useCurrentUserQuery();

  if (data && !loading && !error && called) {
    return data.CurrentUser;
  } else {
    return null;
  }
}
function useSeller() {
  const { loading, data, error, called } = useCurrentSellerQuery();
  if (data && !loading && !error && called) {
    return data.CurrentSeller;
  } else {
    return null;
  }
}
function useAdmin() {
  const { loading, data, error, called } = useIsAdminQuery();
  if (data && !loading && !error && called) {
    return data.isAdmin;
  } else {
    return null;
  }
}

// Returns authentication-related data and functions
const useAuth = (): AuthContextParams => useContext(AuthContext);

export { AuthProvider, useAuth, useUser, useSeller, useAdmin };
