import React, { useEffect } from "react";
import SellForm from "./SellForms/SellForm";

const Sell = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className="card card-6 pb-3">
      <div className="card-body">
        <SellForm />
      </div>
    </div>
  );
};

export default Sell;
