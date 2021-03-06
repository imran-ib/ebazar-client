import { MDBInput } from "mdbreact";
import Link from "next/link";
import styled from "styled-components";
import { toast } from "react-toastify";

const LinkStyles = styled.a`
  color: blueviolet !important;
  & :hover {
    color: red !important;
  }
`;

interface Props {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  nextStep?: any;
  previousStep?: any;
}

function Step1(props: Props) {
  const {
    setEmail,
    setName,
    setPassword,
    setConfirmPassword,
    email,
    name,
    password,
    confirmPassword,
  } = props;

  const RunValidator = () => {
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      props.nextStep();
    } else if (name === "") {
      return toast.error("Name is Required");
    } else if (email === "") {
      return toast.error("Email is Required");
    } else if (password === "") {
      return toast.error("Password is Required");
    } else if (confirmPassword === "") {
      return toast.error("You Must Confirm Your Password");
    }
  };

  return (
    <>
      <MDBInput
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setEmail(e.currentTarget.value)
        }
        icon="envelope"
        name="email"
        type="email"
        label="Enter email *"
        value={email}
      />
      <MDBInput
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setName(e.currentTarget.value)
        }
        icon="user"
        required={true}
        name="name"
        type="text"
        value={name}
        label="Enter Your Full Name *"
      />
      <MDBInput
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setPassword(e.currentTarget.value)
        }
        icon="key"
        name="password"
        type="password"
        label="Enter password *"
        value={password}
      />
      <MDBInput
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setConfirmPassword(e.currentTarget.value)
        }
        icon="key"
        type="password"
        name="confirmPassword"
        label="Confirm password *"
        value={confirmPassword}
      />
      <button className="btn" onClick={RunValidator}>
        Next
      </button>
      <Link href="/seller/login">
        <LinkStyles className="float-right">Already Have An Account</LinkStyles>
      </Link>
    </>
  );
}
export default Step1;
