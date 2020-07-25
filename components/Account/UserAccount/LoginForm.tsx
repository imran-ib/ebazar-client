import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SubmitButton from "components/Utils/reuseable/SubmitButton";
import { useUser_Login_MutationMutation } from "generated/graphql";
import ErrorMessage from "../../Utils/ErrorMessage";
import { toast } from "react-toastify";
import { CurrentUser, CurrentSeller } from "components/Resolvers/AuthResolvers";

const LoginForm = () => {
  const [UserLogin, { loading, error }] = useUser_Login_MutationMutation({
    refetchQueries: [
      {
        query: CurrentUser,
      },
      {
        query: CurrentSeller,
      },
    ],
  });
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: { email: string; password: string } | any) => {
    UserLogin({
      variables: {
        email: data.email,
        password: data.password,
      },
    }).then(() => {
      data.email = "";
      data.password = "";
      toast.success(`Success! you are Logged in`);
      // router.reload();
    });
  };

  return (
    <div className="login-form-container">
      <ErrorMessage error={error} />
      <div className="login-register-form">
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          {errors.email && (
            <small className="text-danger mb-5">"Email is required"</small>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={register({ required: true })}
          />
          {errors.password && (
            <small className="text-danger">"Password is required"</small>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register({ required: true })}
          />

          <div className="button-box">
            <div className="login-toggle-btn">
              <input type="checkbox" />
              <label>Remember me</label>
              <Link href="/user/forgot-password">
                <a>Forgot Password?</a>
              </Link>
            </div>
            <SubmitButton loading={loading} text="Login" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
