import { COUNTRIES } from "../../../../Utils/Options";
import { MDBInput } from "mdbreact";
import { toast } from "react-toastify";

const suggestions = COUNTRIES.map((tag) => {
  return {
    value: tag,
    label: tag,
  };
});

interface Props {
  sellerNationality: string;
  sellerIdentification: string;
  storeName: string;
  setSellerNationality: React.Dispatch<React.SetStateAction<string>>;
  setSellerIdentification: React.Dispatch<React.SetStateAction<string>>;
  setStoreName: React.Dispatch<React.SetStateAction<string>>;
  nextStep?: any;
  previousStep?: any;
}

function Step2(props: Props) {
  const {
    setSellerNationality,
    setSellerIdentification,
    setStoreName,
    sellerIdentification,
    storeName,
    sellerNationality,
  } = props;

  const runValidator = () => {
    if (
      sellerIdentification !== "" &&
      storeName !== "" &&
      sellerNationality !== ""
    ) {
      return props.nextStep();
    } else if (sellerNationality === "") {
      return toast.error("Please Select Your Country");
    } else if (sellerIdentification === "") {
      return toast.error("Please Provide a valid National ID number");
    } else if (storeName === "") {
      return toast.error("StoreName is required");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <label className="my-1 mr-2">Select Your Country</label>
          <select
            className="custom-select my-1 mr-sm-2 float-right"
            id="sellerNationality"
            name="sellerNationality"
            placeholder="Enter You Nationality *"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSellerNationality(e.currentTarget.value)
            }
          >
            {suggestions.map((country) => (
              <option key={country.value} value={country.value}>
                {country.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <br />
      <hr />
      <MDBInput
        icon="address-card"
        value={sellerIdentification}
        name="sellerIdentification"
        type="text"
        label="Enter Your National Id Card Number *"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setSellerIdentification(e.currentTarget.value)
        }
      />

      <MDBInput
        icon="store"
        value={storeName}
        name="storeName"
        type="text"
        label="Enter storeName *"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setStoreName(e.currentTarget.value)
        }
      />
      <button className="btn" onClick={props.previousStep}>
        prev
      </button>
      <button className="btn float-right" onClick={runValidator}>
        Next
      </button>
    </>
  );
}
export default Step2;
