import React from "react";
import Link from "next/link";

interface Props {
  Address: boolean;
  CurrentUser: any;
}

const UserAddress = ({ Address, CurrentUser }: Props) => {
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

  const [PrimaryAddress] = Addresses.filter(
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
        <h3>Billing Address</h3>
        <address>
          <p>
            <strong>{CurrentUser.name.toUpperCase()}</strong>
          </p>

          <p>
            <strong> {"  "}: </strong>
            {PrimaryAddress.address} {PrimaryAddress.streetAddress1}{" "}
            {PrimaryAddress.streetAddress2}
            <br />
            {PrimaryAddress.zipCode}
            {PrimaryAddress.city} {PrimaryAddress.state} <br />{" "}
            {PrimaryAddress.country}
          </p>
          <p>Mobile: {CurrentUser.address.phone} </p>
          <p>Additional info: {CurrentUser.address.message} </p>
        </address>

        {OtherAddresses.length
          ? OtherAddresses.map((address: any, i: any) => (
              <address key={i}>
                <h3>Others Addresses: {address.name}</h3>
                <p>
                  {address.company} {address.streetAddress1}{" "}
                  {address.streetAddress2}
                  <br />
                  {address.zipCode}
                  {address.city} {address.state} <br /> {address.country}
                </p>
                <p>Mobile: {address.phone} </p>
                <p>Additional info: {address.message} </p>
              </address>
            ))
          : ""}
        <Link href="/checkout">
          <a className="check-btn sqr-btn ">
            <i className="fa fa-edit" /> Edit Address
          </a>
        </Link>
      </div>
    </div>
  );
};

export default UserAddress;
