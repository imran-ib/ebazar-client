import React, { createContext, useContext } from "react";
import { logout } from "./helpers";
import ErrorMessage from "../ErrorMessage";
import { useMeQuery, useCurrentSellerQuery } from "generated/graphql";
import Spinner from "../Spinner/Spinner";
import LoginForm from "components/Account/UserAccount/LoginForm";

type AuthContextParams = [{ data: any }, typeof logout];

const AuthContext = createContext<AuthContextParams>([{ data: null }, logout]);

const AuthProvider: React.FC = ({ children }) => {
  const { loading, data, error } = useMeQuery();

  // Usally you dont see this, because we have no "loading" state on SSR
  if (loading) {
    return <Spinner />;
  }

  // JWT token expired or any API-level errors, you can use redirects here
  if (error) {
    console.error(error);

    return <ErrorMessage error={error} />;
  }

  if (!data?.CurrentUser) {
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
  const { loading, data, error, called } = useMeQuery();

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

// Returns authentication-related data and functions
const useAuth = (): AuthContextParams => useContext(AuthContext);

export { AuthProvider, useAuth, useUser, useSeller };
