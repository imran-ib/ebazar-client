import React from "react";
import MasterForm from "./SellerMultiStepRegistration/MultiStepForm";
import SellerVarificationModal from "./SellerMultiStepRegistration/Modal";
import ErrorMessage from "../../../Utils/ErrorMessage";
import Spinner from "components/Utils/Spinner/Spinner";
import { useCreateSellerMutation } from "generated/graphql";

const SellerRegistration = () => {
  const [CreateSeller, { loading, error, called }] = useCreateSellerMutation();
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;

  if (!loading && !error && called) {
    return <SellerVarificationModal />;
  }
  return (
    <>
      <MasterForm CreateSeller={CreateSeller} loading={loading} error={error} />
    </>
  );
};

export default SellerRegistration;
