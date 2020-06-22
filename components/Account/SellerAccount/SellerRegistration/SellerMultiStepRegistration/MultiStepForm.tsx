import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Styles from "styled-components";
import Error from "../../../../Utils/ErrorMessage";
import Spinner from "components/Utils/Spinner/Spinner";
import StepWizard from "react-step-wizard";

const MultiStepFormStyles = Styles.div`
  .main-Heading {
    text-align: center;
    margin-top: 20px; 
  }
  .red{
    background:red;
    font-style:bold;
    
  }
  .steps {
      font-size: 25px;
      text-align: right;
      margin-right: 50px;
  }
`;

interface Props {
  CreateSeller: any;
  loading: boolean;
  error: any;
}
const MasterForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sellerNationality, setSellerNationality] = useState("");
  const [sellerIdentification, setSellerIdentification] = useState("");
  const [storeName, setStoreName] = useState("");
  const [Brand, setBrand] = useState("");
  const [AddressName, setAddressName] = useState("");
  const [AddressAddress, setAddressAddress] = useState("");
  const [AddressCountry, setAddressCountry] = useState("");
  const [AddressState, setAddressState] = useState("");
  const [AddressCity, setAddressCity] = useState("");
  const [AddressZipCode, setAddressZipCode] = useState("");
  const [AddressMaincontactNubmer, setAddressMaincontactNubmer] = useState("");
  const [AddressStreetAddress1, setAddressStreetAddress1] = useState("");
  const [AddressStreetAddress2, setAddressStreetAddress2] = useState("");
  const [AddressCompany, setAddressCompany] = useState("");
  const [AddressMessage, setAddressMessage] = useState("");
  const [AddressAdditionalInfo, setAddressAdditionalInfo] = useState("");
  const [AddressOthercontactNubmers, setAddressOthercontactNubmers] = useState(
    ""
  );
  const BrandsArray = Brand.split(",");

  const data = {
    email,
    name,
    password,
    confirmPassword,
    sellerNationality,
    sellerIdentification,
    storeName,
    Brand: BrandsArray,
    AddressName,
    AddressAddress,
    AddressCountry,
    AddressState,
    AddressCity,
    AddressZipCode,
    AddressMaincontactNubmer,
    AddressStreetAddress1,
    AddressStreetAddress2,
    AddressCompany,
    AddressMessage,
    AddressAdditionalInfo,
    AddressOthercontactNubmers,
  };

  const SubmitData = () => {
    props.CreateSeller({
      variables: { ...data },
    });
  };
  if (props.loading) return <Spinner />;

  return (
    <MultiStepFormStyles>
      <h2 className="main-Heading">eBazar Seller Account Registration</h2>
      <Error error={props.error} />

      <StepWizard>
        <Step1
          setEmail={setEmail}
          setName={setName}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          email={email}
          name={name}
          password={password}
          confirmPassword={confirmPassword}
        />
        <Step2
          setSellerNationality={setSellerNationality}
          setSellerIdentification={setSellerIdentification}
          setStoreName={setStoreName}
          sellerNationality={sellerNationality}
          sellerIdentification={sellerIdentification}
          storeName={storeName}
        />
        <Step3
          setAddressName={setAddressName}
          setAddressAddress={setAddressAddress}
          setAddressCountry={setAddressCountry}
          setAddressState={setAddressState}
          setAddressCity={setAddressCity}
          setAddressZipCode={setAddressZipCode}
          setAddressMaincontactNubmer={setAddressMaincontactNubmer}
          setAddressStreetAddress1={setAddressStreetAddress1}
          setAddressStreetAddress2={setAddressStreetAddress2}
          setAddressCompany={setAddressCompany}
          setAddressMessage={setAddressMessage}
          setAddressAdditionalInfo={setAddressAdditionalInfo}
          setAddressOthercontactNubmers={setAddressOthercontactNubmers}
          AddressName={AddressName}
          AddressAddress={AddressAddress}
          AddressCountry={AddressCountry}
          AddressState={AddressState}
          AddressCity={AddressCity}
          AddressZipCode={AddressZipCode}
          AddressMaincontactNubmer={AddressMaincontactNubmer}
          AddressStreetAddress1={AddressStreetAddress1}
          AddressStreetAddress2={AddressStreetAddress2}
          AddressCompany={AddressCompany}
          AddressMessage={AddressMessage}
          AddressAdditionalInfo={AddressAdditionalInfo}
          AddressOthercontactNubmers={AddressOthercontactNubmers}
        />
        <Step4 SubmitData={SubmitData} setBrand={setBrand} Brand={Brand} />
      </StepWizard>
    </MultiStepFormStyles>
  );
};

export default MasterForm;
