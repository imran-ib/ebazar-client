import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { COUNTRIES } from "../../Sell/SellForms/Options/Options";
import ShipToDifferentAddress from "./ShipToDifferentAddress";
import Spinner from "react-bootstrap/Spinner";
import {
  User,
  useUpdateAddressMutation,
  useSingleAddressQuery,
} from "generated/graphql";
import { Alert } from "react-bootstrap";
import Link from "next/link";

interface Props {
  user: User;
}

const BillingDetails: React.FC<Props> = ({ user }) => {
  const [PrimaryAddress] = user.address.filter(
    (address) => address.isPrimary === true
  );
  const { refetch } = useSingleAddressQuery({
    variables: {
      id: PrimaryAddress?.id,
    },
  });
  const [open, setOpen] = useState(false);
  const [showAlert, setshowAlert] = useState(true);
  const [UpdateAddress, { loading }] = useUpdateAddressMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const OthercontactNubmersArray = data.OthercontactNubmers.split(",");
    UpdateAddress({
      variables: {
        id: PrimaryAddress.id,
        name: data.name,
        address: data.address,
        country: data.country,
        state: data.state,
        city: data.city,
        streetAddress1: data.streetAddress1,
        streetAddress2: data.streetAddress2,
        zipCode: data.zipCode,
        company: data.company,
        message: data.message,
        additionalInfo: data.additionalInfo,
        MaincontactNubmer: data.MaincontactNubmer,
        OthercontactNubmers: {
          set: OthercontactNubmersArray,
        },
      },
    })
      .then(() => {
        refetch();
        toast.success("Success: Your Address is Updated");
      })
      .catch((err) => toast.error(err.message));
  };

  if (user.address.length <= 0) {
    return (
      <div className="col-lg-7">
        <div className="billing-info-wrap mr-50">
          <ShipToDifferentAddress
            isNew={true}
            text="Create New Address"
            userId={user.id}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-7">
      <div className="billing-info-wrap mr-50">
        <h3>
          Billing Details <br />
          {showAlert && (
            <Alert
              variant="info"
              onClose={() => setshowAlert(false)}
              dismissible
            >
              <p style={{ fontSize: "15px" }}>
                This is Your Primary Address. You Can Make Changes to this
                address Or You can Add Another Address. You can Also Change Your
                Primary Address From
                <Link href="/user/profile">
                  <a style={{ borderBottom: "1px solid red" }}> Your Profile</a>
                </Link>
              </p>
            </Alert>
          )}
        </h3>
        <div>
          <ul>
            <li>
              <strong>Name : </strong> {PrimaryAddress.name}
            </li>
            <li>
              <strong>Company : </strong> {PrimaryAddress.company}
            </li>
            <li>
              <strong>City : </strong> {PrimaryAddress.city}
            </li>
            <li>
              <strong>State : </strong> {PrimaryAddress.state}
            </li>
            <li>
              <strong>Country : </strong> {PrimaryAddress.country}
            </li>
            <li>
              <strong>ZipCode : </strong> {PrimaryAddress.zipCode}
            </li>
            <li>
              <strong>MaincontactNubmer : </strong>{" "}
              {PrimaryAddress.MaincontactNubmer}
            </li>
            <li>
              <strong>StreetAddress1 : </strong> {PrimaryAddress.streetAddress1}
            </li>
            <li>
              <strong>StreetAddress2 : </strong> {PrimaryAddress.streetAddress2}
            </li>
            <li>
              <strong>AdditionalInfo : </strong> {PrimaryAddress.additionalInfo}
            </li>
            <li>
              <strong>Message : </strong> {PrimaryAddress.message}
            </li>
            {PrimaryAddress.OthercontactNubmers.map((num, i) => (
              <li key={i}>
                <strong>
                  Other Contacts {i + 1} : {num}{" "}
                </strong>
              </li>
            ))}{" "}
          </ul>
          <a
            className="mb-3 btn btn-primary btn-sm"
            onClick={() => setOpen(!open)}
          >
            {open ? "Hide Form" : "Make Changes To this Address"}
          </a>
        </div>
        <div style={{ display: open ? "block" : "none" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6 col-lg-12">
                <div className="billing-info mb-20">
                  <label>
                    Name{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="name"
                    ref={register}
                    type="text"
                    //@ts-ignore
                    defaultValue={user.name}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Company Name{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="company"
                    ref={register}
                    type="text"
                    // @ts-ignore
                    defaultValue={PrimaryAddress.company}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-select mb-20">
                  <label>
                    Country{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <select
                    name="country"
                    ref={register}
                    defaultValue={PrimaryAddress.country}
                  >
                    <option>Select a country</option>
                    {COUNTRIES.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Address{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    // @ts-ignore
                    defaultValue={PrimaryAddress.address}
                    name="address"
                    ref={register}
                    className="billing-address"
                    placeholder="Your Address"
                    type="text"
                  />
                  <input
                    // @ts-ignore
                    defaultValue={PrimaryAddress.streetAddress2}
                    name="streetAddress2"
                    ref={register}
                    placeholder="Apartment, suite, unit etc."
                    type="text"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Street Address{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    // @ts-ignore
                    defaultValue={PrimaryAddress.streetAddress1}
                    name="streetAddress1"
                    ref={register}
                    className="billing-address"
                    placeholder="House number and street name"
                    type="text"
                  />
                  <input
                    // @ts-ignore
                    defaultValue={PrimaryAddress.streetAddress2}
                    name="streetAddress2"
                    ref={register}
                    placeholder="Apartment, suite, unit etc."
                    type="text"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Town / City{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="city"
                    ref={register}
                    type="text"
                    defaultValue={PrimaryAddress.city}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    State / County{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="state"
                    ref={register}
                    type="text"
                    defaultValue={PrimaryAddress.state}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Postcode / ZIP{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="zipCode"
                    ref={register}
                    type="text"
                    defaultValue={PrimaryAddress.zipCode}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Phone{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="MaincontactNubmer"
                    ref={register}
                    type="string"
                    defaultValue={PrimaryAddress.MaincontactNubmer}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Email Address{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="email"
                    ref={register}
                    type="email"
                    defaultValue={user.email}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    Other Contact Nubmer <br />
                    <small className="text-info">
                      You add multiple Numbers by separating them with comma
                    </small>
                  </label>

                  <input
                    name="OthercontactNubmers"
                    ref={register}
                    type="string"
                    defaultValue={PrimaryAddress.MaincontactNubmer}
                  />
                </div>
              </div>
            </div>

            <div className="additional-info-wrap">
              <label>Order notes</label>
              <textarea
                // @ts-ignore
                defaultValue={PrimaryAddress.message}
                ref={register}
                placeholder="Notes about your order, e.g. special notes for delivery. "
                name="message"
              ></textarea>
            </div>
            <div style={{ textAlign: "center" }}>
              <small>
                If your address is up to date then proceed with{" "}
                <strong>checkout</strong>
              </small>
            </div>
            <button disabled={loading} className="btn btn-danger bnt-block">
              {loading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              {loading ? "Updating Your Address..." : "Update My Address"}
            </button>
          </form>
        </div>
        <ShipToDifferentAddress
          userId={user.id}
          loading={loading}
          isNew={false}
          text="Ship to a different address?"
        />
      </div>
    </div>
  );
};

export default BillingDetails;
