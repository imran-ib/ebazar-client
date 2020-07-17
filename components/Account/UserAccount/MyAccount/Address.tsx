import React from "react";
import Link from "next/link";
import {
  Address,
  useTogglePrimaryAddressMutation,
  CurrentUserDocument,
  useDeleteAddressMutation,
} from "generated/graphql";
import { toast } from "react-toastify";

interface Props {
  Address: boolean;
  CurrentUser: any;
}

const UserAddress = ({ Address, CurrentUser }: Props) => {
  const [
    TogglePrimaryAddress,
    { loading: ToggleLoading },
  ] = useTogglePrimaryAddressMutation();
  const [
    deleteOneAddress,
    { loading: deleteLoding },
  ] = useDeleteAddressMutation();
  const Addresses = CurrentUser.address;

  if (!Addresses || Addresses.length === 0)
    return (
      <>
        {Address && (
          <div className="myaccount-content">
            <h3>
              No Address Found <br />
              <Link href="/checkout">
                <a>Click me to add your address</a>
              </Link>
            </h3>
          </div>
        )}
      </>
    );

  const [PrimaryAddress]: Address[] = Addresses.filter(
    (address: any) => address.isPrimary === true
  );

  const OtherAddresses = Addresses.filter(
    (address: any) => address.isPrimary !== true
  );

  return (
    <div
      className={`tab-pane fade show ${Address ? "active" : ""}`}
      id="account-info"
      role="tabpanel"
    >
      <div className="myaccount-content">
        <div>
          <h3>Billing Address</h3>
          <address>
            <p>
              <strong>{CurrentUser.name.toUpperCase()}</strong>
            </p>
            <span className=" float-right badge badge-primary">
              Primary Address
            </span>
            <p>
              {PrimaryAddress.name}
              <strong> {"  "}: </strong>
              {PrimaryAddress.address} {PrimaryAddress.company}
              {PrimaryAddress.streetAddress2} {PrimaryAddress.streetAddress1}{" "}
              <br />
              {PrimaryAddress.zipCode}
              {PrimaryAddress.city} {PrimaryAddress.city} <br />{" "}
              {PrimaryAddress.state} {PrimaryAddress.state} <br />{" "}
              {PrimaryAddress.country}
              {PrimaryAddress.OthercontactNubmers.map((num) => num)}
            </p>
            <p>Mobile: {PrimaryAddress.MaincontactNubmer}</p>
            <p>Additional info: {PrimaryAddress.additionalInfo} </p>
            <p>Message: {PrimaryAddress.message} </p>
          </address>
        </div>

        {OtherAddresses.length
          ? OtherAddresses.map((address: any, i: any) => (
              <address key={i}>
                <h3>Others Addresses: {address.name}</h3>
                <p>
                  {address.name}
                  <strong> {"  "}: </strong>
                  {address.address} {address.company}
                  {address.streetAddress2} {address.streetAddress1} <br />
                  {address.zipCode}
                  {address.city} {address.city} <br /> {address.state}{" "}
                  {address.state} <br /> {address.country}
                  {address.OthercontactNubmers.map((num: any) => num)}
                </p>
                <p>Mobile: {address.MaincontactNubmer}</p>
                <p>Additional info: {address.additionalInfo} </p>
                <p>Message: {address.message} </p>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link href="/checkout">
                    <a type="button" className="btn  btn-sm btn-danger">
                      Edit
                    </a>
                  </Link>
                  <button
                    onClick={() => {
                      TogglePrimaryAddress({
                        variables: { addressId: address.id },
                        refetchQueries: [{ query: CurrentUserDocument }],
                      })
                        .then(() =>
                          toast.success(
                            `Success! Primary Address Has been Changed`
                          )
                        )
                        .catch((err) => toast.error(err.message));
                    }}
                    type="button"
                    className="btn  btn-sm btn-danger"
                  >
                    {ToggleLoading ? (
                      <div className="spinner-grow text-primary spinner-grow-sm"></div>
                    ) : (
                      "Make It Primary"
                    )}
                  </button>
                  <button
                    onClick={() => {
                      deleteOneAddress({
                        variables: { id: address.id },
                        refetchQueries: [{ query: CurrentUserDocument }],
                      })
                        .then(() =>
                          toast.success(
                            `Success! Primary Address Has been removed`
                          )
                        )
                        .catch((err) => toast.error(err.message));
                    }}
                    type="button"
                    className="btn  btn-sm btn-danger"
                  >
                    {deleteLoding ? (
                      <div className="spinner-grow text-primary spinner-grow-sm"></div>
                    ) : (
                      "Delete"
                    )}
                  </button>
                </div>
              </address>
            ))
          : ""}
        <Link href="/checkout">
          <a className="float-right">Add New Address</a>
        </Link>
      </div>
    </div>
  );
};

export default UserAddress;
