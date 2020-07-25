import React from "react";
import { MDBInput } from "mdbreact";
import { toast } from "react-toastify";

interface Props {
  AddressName: string;
  AddressAddress: string;
  AddressCountry: string;
  AddressState: string;
  AddressCity: string;
  AddressZipCode: string;
  AddressMaincontactNubmer: string;
  AddressStreetAddress1: string;
  AddressStreetAddress2: string;
  AddressCompany: string;
  AddressMessage: string;
  AddressAdditionalInfo: string;
  AddressOthercontactNubmers: string;
  setAddressName: React.Dispatch<React.SetStateAction<string>>;
  setAddressAddress: React.Dispatch<React.SetStateAction<string>>;
  setAddressCountry: React.Dispatch<React.SetStateAction<string>>;
  setAddressState: React.Dispatch<React.SetStateAction<string>>;
  setAddressCity: React.Dispatch<React.SetStateAction<string>>;
  setAddressZipCode: React.Dispatch<React.SetStateAction<string>>;
  setAddressMaincontactNubmer: React.Dispatch<React.SetStateAction<string>>;
  setAddressStreetAddress1: React.Dispatch<React.SetStateAction<string>>;
  setAddressStreetAddress2: React.Dispatch<React.SetStateAction<string>>;
  setAddressCompany: React.Dispatch<React.SetStateAction<string>>;
  setAddressMessage: React.Dispatch<React.SetStateAction<string>>;
  setAddressAdditionalInfo: React.Dispatch<React.SetStateAction<string>>;
  setAddressOthercontactNubmers: React.Dispatch<React.SetStateAction<string>>;
  nextStep?: any;
  previousStep?: any;
}

const Step3 = (props: Props) => {
  const RunValidator = () => {
    if (
      props.AddressName !== "" &&
      props.AddressAddress !== "" &&
      props.AddressCountry !== "" &&
      props.AddressState !== "" &&
      props.AddressCity !== "" &&
      props.AddressZipCode !== "" &&
      props.AddressMaincontactNubmer !== ""
    ) {
      return props.nextStep();
    } else {
      return toast.error(`Please Provide All The Required Fields`);
    }
  };

  return (
    <>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name Your Address</label>
          <abbr className="required text-danger ml-2" title="required">
            *
          </abbr>

          <MDBInput
            onChange={(e) => props.setAddressName(e.currentTarget.value)}
            name="AddressName"
            value={props.AddressName}
            label="Give Your Address A Name"
            icon="tag"
            group
            type="text"
            error="wrong"
            success="right"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Contact Number</label>
          <abbr className="required text-danger ml-2" title="required">
            *
          </abbr>
          <MDBInput
            onChange={(e) =>
              props.setAddressMaincontactNubmer(e.currentTarget.value)
            }
            name="AddressMaincontactNubmer"
            value={props.AddressMaincontactNubmer}
            label="Your Phone/Mobile Number"
            icon="phone"
            group
            type="text"
            error="wrong"
            success="right"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <abbr className="required text-danger ml-2" title="required">
          *
        </abbr>
        <MDBInput
          onChange={(e) => props.setAddressAddress(e.currentTarget.value)}
          name="AddressAddress"
          value={props.AddressAddress}
          label="Your Address"
          icon="map"
          group
          type="text"
          error="wrong"
          success="right"
        />
      </div>

      <div className="form-group">
        <label htmlFor="inputAddress2">Address 2</label>
        <MDBInput
          onChange={(e) =>
            props.setAddressStreetAddress1(e.currentTarget.value)
          }
          name="AddressStreetAddress1"
          value={props.AddressStreetAddress1}
          label="street Address"
          icon="map"
          group
          type="text"
          error="wrong"
          success="right"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress2">Address 3</label>
        <MDBInput
          onChange={(e) =>
            props.setAddressStreetAddress2(e.currentTarget.value)
          }
          name="AddressStreetAddress2"
          value={props.AddressStreetAddress2}
          label="street Address"
          icon="map"
          group
          type="text"
          error="wrong"
          success="right"
        />
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">country</label>
          <abbr className="required text-danger ml-2" title="required">
            *
          </abbr>
          <MDBInput
            onChange={(e) => props.setAddressCountry(e.currentTarget.value)}
            name="AddressCountry"
            value={props.AddressCountry}
            label="Your country"
            icon="flag"
            group
            type="text"
            error="wrong"
            success="right"
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="inputState">State</label>
          <abbr className="required text-danger ml-2" title="required">
            *
          </abbr>
          <MDBInput
            onChange={(e) => props.setAddressState(e.currentTarget.value)}
            name="AddressState"
            value={props.AddressState}
            label="Your State"
            icon="city"
            group
            type="text"
            error="wrong"
            success="right"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputCity">City</label>
          <abbr className="required text-danger ml-2" title="required">
            *
          </abbr>
          <MDBInput
            onChange={(e) => props.setAddressCity(e.currentTarget.value)}
            name="AddressCity"
            value={props.AddressCity}
            label="Your City"
            icon="city"
            group
            type="text"
            error="wrong"
            success="right"
          />
        </div>

        <div className="form-group col-md-2">
          <label htmlFor="inputZip">Zip</label>
          <abbr className="required text-danger ml-2" title="required">
            *
          </abbr>
          <MDBInput
            onChange={(e) => props.setAddressZipCode(e.currentTarget.value)}
            name="AddressZipCode"
            value={props.AddressZipCode}
            label="Area zip Code"
            icon="code"
            group
            type="text"
            error="wrong"
            success="right"
          />
        </div>
      </div>
      <button className="btn" onClick={props.previousStep}>
        prev
      </button>
      <button className="btn float-right" onClick={RunValidator}>
        Next
      </button>
    </>
  );
};

export default Step3;
