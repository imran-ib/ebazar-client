import React from "react";

interface Props {
  loading: boolean;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const SubmitButton = ({ loading, text, type }: Props) => {
  return (
    <button type={type} disabled={loading}>
      <span className="mr-1">{text}</span>
      {loading && (
        <span
          className="spinner-grow text-danger spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
    </button>
  );
};

export default SubmitButton;
