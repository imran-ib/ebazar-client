import React, { useState } from "react";
import { useRouter } from "next/router";
import ErrorMessage from "../../../../Utils/ErrorMessage";
import { MDBBtn, MDBInput } from "mdbreact";
import {
  useVerifySellerMutation,
  useRequestVerificationTokenMutation,
} from "generated/graphql";
import { toast } from "react-toastify";

interface Props {
  token: any;
}

const SellerVification = ({ token }: Props) => {
  const [email, setEmail] = useState("");
  const [VerifySeller, { loading, error }] = useVerifySellerMutation();

  const [
    RequestEmailVerificationToken,
    { loading: ReqLoading, error: ReqError },
  ] = useRequestVerificationTokenMutation();
  const Router = useRouter();

  const VerifySellerFunction = (token: string) => {
    VerifySeller({
      variables: { SellerVerificationToken: token },
    }).then(() => {
      toast.success(`Success! Thank You For Verifying your email address`);
      Router.push("/sell");
    });
  };
  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "150px" }}
    >
      <ErrorMessage error={error} />
      <p className="lead">
        Click The Link Below To Activate Your Account And Start Selling...
        <span>Happy Selling</span>
      </p>

      <MDBBtn
        disabled={loading}
        color="success"
        onClick={() => {
          VerifySellerFunction(token);
        }}
      >
        Activat{loading ? "ing.." : "e My Account"}
      </MDBBtn>

      <div className="mt-5">
        <ErrorMessage error={ReqError} />
        <p className="lead">Or Request A New Verification Token</p>

        <MDBInput
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          size="sm"
          name="email"
          type="email"
          label="Enter email"
          value={email}
        />

        <MDBBtn
          disabled={ReqLoading}
          onClick={() =>
            RequestEmailVerificationToken({
              variables: { email: email },
            })
              .then(() =>
                toast.success(
                  `Success! New Token Has been Generated and sent To ${email}`
                )
              )
              .catch((err) => toast.error(`${err.message}`))
          }
        >
          Request a New Token{" "}
        </MDBBtn>
      </div>
    </div>
  );
};

export default SellerVification;
