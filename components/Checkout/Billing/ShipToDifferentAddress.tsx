import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { COUNTRIES } from "../../Sell/SellForms/Options/Options";
import {
  useCreateAddressMutation,
  CurrentUserDocument,
} from "generated/graphql";
import { Spinner } from "react-bootstrap";

interface Props {
  loading?: boolean;
  isNew: boolean;
  text: string;
  userId: string;
}

const ShipToDifferentAddress: React.FC<Props> = ({  text }) => {
  const [open, setOpen] = useState(false);

  const [CreateAddress, { loading }] = useCreateAddressMutation({
    refetchQueries: [{ query: CurrentUserDocument }],
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    CreateAddress({
      variables: {
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
        OthercontactNubmers: data.OthercontactNubmers,
      },
    })
      .then(() => {
        toast.success("Success! Your Address is Updated");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <>
      <div className="checkout-account mt-25">
        <a
          className="mb-3 btn btn-primary btn-sm"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide Form" : text}
        </a>
      </div>
      <div
        style={{ display: open ? "block" : "none" }}
        className="different-address open-toggle mt-30"
      >
        <div className="row">
          <h3>Create New Address</h3>
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
                  <input name="name" ref={register} type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="billing-info mb-20">
                  <label>
                    Address{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input name="address" ref={register} type="text" />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="billing-info mb-20">
                  <label>
                    Company Name{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input name="company" ref={register} type="text" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="billing-select mb-20">
                  <label>
                    Country{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <select name="country" ref={register}>
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
                    Street Address{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="streetAddress1"
                    ref={register}
                    className="billing-address"
                    placeholder="House number and street name"
                    type="text"
                  />
                  <input
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
                  <input name="city" ref={register} type="text" />
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
                  <input name="state" ref={register} type="text" />
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
                  <input name="zipCode" ref={register} type="text" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>
                    MaincontactNubmer{" "}
                    <abbr className="required" title="required">
                      *
                    </abbr>
                  </label>
                  <input
                    name="MaincontactNubmer"
                    ref={register}
                    type="string"
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
                  <input name="email" ref={register} type="email" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="billing-info mb-20">
                  <label>Other Contact Nubmer</label>
                  <input
                    name="OthercontactNubmers"
                    ref={register}
                    type="string"
                  />
                </div>
              </div>
            </div>

            <div className="additional-info-wrap">
              <label>Order notes</label>
              <textarea
                ref={register}
                placeholder="Notes about your order, e.g. special notes for delivery. "
                name="message"
              ></textarea>
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
              {loading ? "Creating Address..." : "Create Address"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShipToDifferentAddress;
