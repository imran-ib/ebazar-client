import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDeleteUserAccountMutation } from "generated/graphql";

interface Props {
  Dactivate: boolean;
  me: any;
}

const UserDeActivate = ({ Dactivate, me }: Props) => {
  const Router = useRouter();
  const [DeleteUserAccount, { loading }] = useDeleteUserAccountMutation();
  const DeleteUser = (id: any) => {
    DeleteUserAccount({
      variables: { userId: id },
    }).then(() => {
      toast.success(`Success: Account Deleted! Sorry To See You Go`);
      Router.reload();
    });
  };

  return (
    <div
      className={`tab-pane fade show ${Dactivate ? "active" : ""}`}
      role="tabpanel"
    >
      <div className="myaccount-content">
        <h3>Dactivate Your Account </h3>
        <div className="welcome">
          <p>
            Hello, <strong>{me.name.toUpperCase()}</strong>
          </p>
        </div>

        <p className="mb-0">
          Here You Can Remove Your Account From{" "}
          <strong style={{ color: "red" }}> iBazar </strong>. Please Note That
          This Action Is <strong>Permanent</strong> And All Of The Items History
          You Purchased Or Liked Or Added To Whishlist{" "}
          <strong>Will Be Removed</strong>.
        </p>
      </div>

      <button
        disabled={loading}
        onClick={() => {
          DeleteUser(me.id);
        }}
        type="submit"
        className="btn btn-block btn-danger"
      >
        I am aware of consequences and still want to delete my account
      </button>

      {/* <button type="submit">{loading ? <DotsSpinner /> : "Login"}</button> */}
    </div>
  );
};

export default UserDeActivate;
