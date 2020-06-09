import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorMessage from "../../Utils/ErrorMessage";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { useSellerLoginMutation } from "generated/graphql";
import { Me, CurrentSeller } from "components/Resolvers/AuthResolvers";

const SellerLogin = () => {
  const [loginSeller, { loading, error }] = useSellerLoginMutation({
    refetchQueries: [
      {
        query: Me,
      },
      {
        query: CurrentSeller,
      },
    ],
  });
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit } = useForm();
  const Router = useRouter();

  const onSubmit = (data: any) => {
    loginSeller({
      variables: {
        email: data.email,
        password: data.password,
      },
    }).then(() => {
      toast.success(`Success: You Are Signed in Now`);
      Router.push("/sell");
    });
  };
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          {/* {!loading && error && called && <AlertPage error={error.message} />} */}
          <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <p className="h2 text-center mb-4">Seller Sign in</p>
            <ErrorMessage error={error} />
            <div className="grey-text">
              <MDBInput
                inputRef={register}
                name="email"
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                name="password"
                inputRef={register}
                label="Type your password"
                icon="lock"
                group
                type={toggle ? "text" : "password"}
                validate
              >
                <div style={{ display: "flex" }}>
                  <p style={{ marginLeft: "50px", marginRight: "30px" }}>
                    Show Me The Password
                  </p>
                  <MDBIcon
                    onClick={() => setToggle(!toggle)}
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                      marginTop: "3px",
                    }}
                    far
                    icon="eye"
                  />
                </div>
                <div style={{ float: "right" }}>
                  <Link href="/seller/forgot-password">
                    <a>Forgot Password?</a>
                  </Link>
                </div>
              </MDBInput>
            </div>

            <div className="text-center">
              <MDBBtn disabled={loading} type="submit" gradient="purple">
                Login{loading && "ing you in..."}
              </MDBBtn>
            </div>
            <p className="font-small grey-text d-flex justify-content-center">
              Don't have a seller's account?
              <Link href="/seller/register">
                <a className="dark-grey-text font-weight-bold ml-1">Sign up</a>
              </Link>
            </p>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SellerLogin;
