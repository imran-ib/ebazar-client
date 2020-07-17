import React from "react";
import { useForm } from "react-hook-form";
import { useResetUsersPasswordFromProfileMutation } from "generated/graphql";
import { toast } from "react-toastify";
import ErrorMessage from "../../../Utils/ErrorMessage";

interface Props {
  Account: boolean;
  me: any;
}

const UserAccountDetails: React.FC<Props> = ({ Account, me }: Props) => {
  const [
    ResetUsersPasswordFromProfile,
    { loading, error },
  ] = useResetUsersPasswordFromProfileMutation({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    ResetUsersPasswordFromProfile({
      variables: {
        OldPassword: data.oldPassword,
        password: data.password,
        confirmPassword: data.confirmPassword,
      },
    })
      .then(() => toast.success(`Success! Your Password Has Been Changed`))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div
      className={`tab-pane fade show ${Account ? "active" : ""}`}
      id="address-edit"
      role="tabpanel"
    >
      <div className="myaccount-content">
        <h3>Account Details</h3>
        <div className="account-details-form">
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-12">
                <div className="single-input-item">
                  <label htmlFor="last-name" className="required">
                    Name
                  </label>
                  <input
                    disabled
                    type="text"
                    id="last-name"
                    defaultValue={me.name}
                  />
                </div>
              </div>
            </div>
            <div className="single-input-item">
              <label htmlFor="display-name" className="required">
                Display Name
              </label>
              <input
                disabled
                type="text"
                id="display-name"
                defaultValue={me.name}
              />
            </div>
            <div className="single-input-item">
              <label htmlFor="email" className="required">
                Email Addres
              </label>
              <input disabled type="email" id="email" defaultValue={me.email} />
            </div>
            <fieldset>
              <legend>Password change</legend>
              <ErrorMessage error={error} />
              <div className="single-input-item">
                <label htmlFor="current-pwd" className="required">
                  Current Password
                </label>
                <input
                  type="password"
                  id="current-pwd"
                  name="oldPassword"
                  ref={register({ required: true })}
                />
                {errors.oldPassword && (
                  <small className="text-danger mb-5">
                    "Current Password is required"
                  </small>
                )}
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-input-item">
                    <label htmlFor="new-pwd" className="required">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="new-pwd"
                      name="password"
                      ref={register({ required: true })}
                    />
                    {errors.password && (
                      <small className="text-danger mb-5">
                        "New Password Cannot Be Empty"
                      </small>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-input-item">
                    <label htmlFor="confirm-pwd" className="required">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm-pwd"
                      name="confirmPassword"
                      ref={register({ required: true })}
                    />
                    {errors.confirmPassword && (
                      <small className="text-danger mb-5">
                        "Password Do Not Match"
                      </small>
                    )}
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="single-input-item">
              <button disabled={loading} className="check-btn sqr-btn">
                {" "}
                {loading ? "Saving..." : "Save Changes "}
                {loading && (
                  <span className="spinner-grow spinner-grow-sm"></span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAccountDetails;
