import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InfoModel from "../../InfoModal";
import { useSellerRequestPasswordResetMutation } from "generated/graphql";

interface Props {}

const SellerRequestRestPassword: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [
    SellerForgotPasswordRequest,
    { loading, error, called },
  ] = useSellerRequestPasswordResetMutation();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    SellerForgotPasswordRequest({
      variables: { email: data.email },
    }).catch((err) => toast.error(err.message));
    setEmail(data.email);
  };

  if (!loading && !error && called)
    return <InfoModel email={email} modal="SellerModal" />;

  return (
    <>
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <div className="login-register-tab-list nav">
                  <div className="login-form-container">
                    <h4 style={{ marginBottom: "40px" }}>
                      Please Provide Your Email Address, We Will Send you a
                      Password Reset Link
                    </h4>
                    {errors.email && (
                      <span>
                        <p
                          style={{
                            color: "red",
                            fontSize: "16px",
                            marginBottom: "40px",
                            textAlign: "center",
                          }}
                        >
                          You must provide a valid email address,
                        </p>
                      </span>
                    )}
                    <div className="login-register-form">
                      <form onSubmit={handleSubmit(onSubmit)} method="post">
                        <label htmlFor="email">Email Address</label>
                        <input
                          ref={register({ required: true })}
                          type="email"
                          name="email"
                          placeholder="Enter Your Email Address"
                        />

                        <div className="button-box">
                          <button
                            disabled={loading}
                            className={`btn btn-${
                              loading ? "success" : "danger"
                            } btn-block`}
                            type="submit"
                          >
                            {loading && (
                              <div
                                className="spinner-grow"
                                style={{
                                  width: "1.5rem",
                                  height: "1.5rem",
                                  marginBottom: "-4px",
                                }}
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            )}
                            Send{loading ? "ing you a" : " Me "} Reset Link
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerRequestRestPassword;
