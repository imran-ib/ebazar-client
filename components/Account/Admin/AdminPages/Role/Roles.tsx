import React, { useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { toast } from "react-toastify";
import ErrorMessage from "../../../../Utils/ErrorMessage";
import {
  useUpdateRoleMutation,
  useAllSellerQuery,
  useAllUserQuery,
  AllSellerDocument,
  AllUserDocument,
} from "generated/graphql";

const Head = ["ADMIN", "USER", "SELLER"];

const FourDigitKey: string = Math.floor(Math.random() * 100000).toString();

const Roles = () => {
  const [Toggle, setToggle] = useState(true);

  const {
    data: UsersData,
    loading: UserLoading,
    error: UserError,
  } = useAllUserQuery();
  const {
    data: SellersData,
    loading: SellerLoading,
    error: SellerError,
  } = useAllSellerQuery();
  if (UserLoading || SellerLoading)
    return <p style={{ textAlign: "center" }}>Please Wait, loading...</p>;

  const users = UsersData?.AllUsers.edges;
  const Sellers = SellersData?.AllSeller.edges;
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Manage {`${Toggle ? "Seller's" : "User's"}`} Role
      </h1>
      <hr />
      <p>{<ErrorMessage error={UserError || SellerError} />}</p>
      <button
        className={`btn btn-${Toggle ? "success" : "danger"}`}
        onClick={() => setToggle(!Toggle)}
      >
        Show {Toggle ? "User" : " Seller"}
      </button>
      <MDBTable responsive>
        <MDBTableHead>
          <tr>
            <th className=" text-center">NO.</th>
            <th className=" text-center">Registered As</th>
            <th className=" text-center">Email</th>
            {Head.map((item, i) => (
              <th className="text-center" key={i}>
                {item}
              </th>
            ))}
            <th> UPDATE</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Toggle
            ? Sellers?.map((seller, i) => (
                <Seller key={seller?.node.id} seller={seller} No={i + 1} />
              ))
            : users?.map((user, i) => (
                <User key={user?.node.id} user={user} No={i + 1} />
              ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

const Seller = (props: any) => {
  const seller = props.seller.node;
  const No = props.No;

  const [role, setRole] = useState(seller.role);

  const [updateRole, { loading, error }] = useUpdateRoleMutation({
    variables: { sellerId: seller.id, role: role },
    refetchQueries: [
      {
        query: AllSellerDocument,
      },
      {
        query: AllUserDocument,
      },
    ],
  });

  return (
    <>
      <tr>
        <th colSpan={12}>{error && <ErrorMessage error={error} />}</th>
      </tr>
      <tr>
        <td className="text-center" style={{ paddingTop: "30px" }}>
          {No}
        </td>
        <td className="text-center" style={{ paddingTop: "30px" }}>
          Seller
        </td>
        <td className="text-center" style={{ paddingTop: "30px" }}>
          {seller.email}{" "}
          <span className="ml-2 badge badge-pill badge-danger">
            {seller.role}
          </span>{" "}
        </td>

        {Head.map((role, i) => (
          <td key={i}>
            <label htmlFor={`${seller.id}-${parseInt(FourDigitKey) * No}`}>
              <input
                id={`${seller.id}-${parseInt(FourDigitKey) * No}`}
                name={`${seller.role}-${seller.id}-${
                  parseInt(FourDigitKey) * No
                }`}
                style={{
                  width: "20px",
                  marginLeft: "60px",
                }}
                type="radio"
                value={role}
                defaultChecked={role === seller.role}
                onChange={(e) => setRole(e.currentTarget.value)}
              />
            </label>
          </td>
        ))}

        <th>
          <button
            disabled={loading}
            onClick={() => {
              updateRole()
                .then(() => {
                  toast.success("Success: role Updated");
                })
                .catch(
                  (err: { message: import("react-toastify").ToastContent }) =>
                    toast.error(err.message)
                );
            }}
            type="submit"
            className="btn btn-sm btn-danger
        "
          >
            Updat{loading ? "ing..." : "e"}
          </button>
        </th>
      </tr>
    </>
  );
};
const User = (props: any) => {
  const user = props.user.node;
  const No = props.No;
  const [role, setRole] = useState(user.role);

  const [updateRole, { loading, error }] = useUpdateRoleMutation({
    variables: { userId: user.id, role: role },
    refetchQueries: [
      {
        query: AllSellerDocument,
      },
      {
        query: AllUserDocument,
      },
    ],
  });

  return (
    <>
      <tr>
        <th colSpan={12}>{error && <ErrorMessage error={error} />}</th>
      </tr>
      <tr>
        <td className="text-center" style={{ paddingTop: "30px" }}>
          {No}
        </td>
        <td className="text-center" style={{ paddingTop: "30px" }}>
          User
        </td>
        <td className="text-center" style={{ paddingTop: "30px" }}>
          {user.email}
          <span className="ml-2 badge badge-pill badge-success">
            {user.role}
          </span>{" "}
        </td>

        {Head.map((role, i) => (
          <td key={i}>
            <label htmlFor={`${user.id}-${parseInt(FourDigitKey) * No}`}>
              <input
                id={`${user.id}-${parseInt(FourDigitKey) * No}`}
                name={`${user.role}-${user.id}-${parseInt(FourDigitKey) * No}`}
                style={{
                  width: "20px",
                  marginLeft: "60px",
                }}
                type="radio"
                value={role}
                defaultChecked={role === user.role}
                onChange={(e) => setRole(e.currentTarget.value)}
              />
            </label>
          </td>
        ))}
        <th>
          <button
            disabled={loading}
            onClick={() => {
              updateRole()
                .then(() => {
                  toast.success("Success: role Updated");
                })
                .catch(
                  (err: { message: import("react-toastify").ToastContent }) =>
                    toast.error(err.message)
                );
            }}
            type="submit"
            className="btn btn-sm btn-success
        "
          >
            Updat{loading ? "ing..." : "e"}
          </button>
        </th>
      </tr>
    </>
  );
};

export default Roles;
