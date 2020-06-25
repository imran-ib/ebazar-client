import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useUserResetPasswordMutation } from "generated/graphql";
import ErrorMessage from "../../../Utils/ErrorMessage";
import { CurrentUser, CurrentSeller } from "components/Resolvers/AuthResolvers";

interface Props {
  token: any;
}

const UserResetPasswordForm: React.FC<Props> = ({ token }) => {
  const [UserResetPassword, { loading, error }] = useUserResetPasswordMutation({
    refetchQueries: [{ query: CurrentUser }, { query: CurrentSeller }],
  });
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    UserResetPassword({
      variables: {
        token: token,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
    })
      .then(() => {
        toast.success(
          "success: Your Password Has been Reset and You are Logged in, Happy Shopping"
        );
        router.push("/shop");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <div className="login-register-tab-list nav">
                  <ErrorMessage error={error} />
                  <div className="login-form-container">
                    <h2 style={{ marginBottom: "40px" }}>
                      Enter your New Password
                    </h2>
                    {errors.password && (
                      <span>
                        <p
                          style={{
                            color: "red",
                            fontSize: "16px",
                            marginBottom: "40px",
                            textAlign: "center",
                          }}
                        >
                          Password Cannot be less than 6 characters
                        </p>
                      </span>
                    )}
                    <div className="login-register-form">
                      <form onSubmit={handleSubmit(onSubmit)} method="post">
                        <label htmlFor="password">New Password</label>
                        <input
                          ref={register({
                            validate: (value) => value.length > 5,
                          })}
                          type="password"
                          name="password"
                          placeholder="Enter Your New Password"
                        />
                        <label htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <input
                          ref={register({ required: true })}
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Your Password"
                        />

                        <div className="button-box">
                          <button
                            disabled={loading}
                            className={`btn btn-${
                              loading ? "success" : "danger"
                            } btn-block`}
                            type="submit"
                          >
                            Reset{loading ? "ing Your" : "My"} Password
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

export default UserResetPasswordForm;
