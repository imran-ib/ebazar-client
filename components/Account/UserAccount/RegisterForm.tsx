import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "components/Utils/reuseable/SubmitButton";
import { useRegister_UserMutation } from "generated/graphql";
import ErrorMessage from "../../Utils/ErrorMessage";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface Props {
  ActivateLogin: () => void;
}

const RegisterForm = (props: Props) => {
  const [CreateUser, { loading, error }] = useRegister_UserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();

  const onSubmit = (
    data: { name: string; email: string; password: string } | any
  ) => {
    CreateUser({
      variables: {
        ...data,
      },
    }).then(() => {
      toast.success(
        `Success: New Account Has Been Created And Your Are Logged in`
      );
      router.reload();
    });
  };
  return (
    <div className="login-form-container">
      <ErrorMessage error={error} />
      <div className="login-register-form">
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          {errors.name && (
            <small className="text-danger mb-5">"Name is required"</small>
          )}
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={register({ required: true })}
          />
          {errors.email && (
            <small className="text-danger mb-5">"Email is required"</small>
          )}
          <input
            name="email"
            placeholder="Email"
            type="email"
            ref={register({ required: true })}
          />
          {errors.password && (
            <small className="text-danger mb-5">"Password is required"</small>
          )}
          <input
            ref={register({ required: true })}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <div className="button-box">
            <div className="login-toggle-btn">
              <input
                onClick={() => setShowPassword(!showPassword)}
                type="checkbox"
              />
              <label>Show Password</label>

              <a
                onClick={() => {
                  props.ActivateLogin();
                }}
              >
                Already Have an account
              </a>
            </div>

            <SubmitButton loading={loading} text="Register" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
