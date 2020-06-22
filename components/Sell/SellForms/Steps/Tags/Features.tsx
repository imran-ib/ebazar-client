import React, { ReactElement } from "react";

interface Props {
  nextStep?: any;
  previousStep?: any;
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  Features: string[];
}

function FeaturesComponent(props: Props): ReactElement {
  const { setFeatures, Features } = props;

  const RemoveFeatures = (i: number) => {
    const newFeatures = [...Features];
    newFeatures.splice(i, 1);
    setFeatures([...newFeatures]);
  };

  const inputKeyDown = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    //@ts-ignore
    if (e.key === "Enter" && val) {
      e.preventDefault();
      if (
        Features.find(
          (Features) => Features.toLowerCase() === val.toLowerCase()
        )
      ) {
        return;
      }
      setFeatures([...Features, val]);
      e.currentTarget.value = "";
      //@ts-ignore
    } else if (e.key === "Backspace" && !val) {
      RemoveFeatures(Features.length - 1);
    }
  };
  return (
    <div className="input-tag">
      <span className="step-text mb-3 ml-3">
        Tell Us About Other Features Your Product Has{" "}
        <small className="ml-2 text-info"> (Hit Enter To Add) </small>
      </span>
      <ul className="input-tag__tags">
        {Features.map((Features, i) => (
          <li key={Features}>
            {Features}
            <button
              type="button"
              onClick={() => {
                RemoveFeatures(i);
              }}
            >
              +
            </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input type="text" onKeyDown={inputKeyDown} defaultValue="" />
        </li>
      </ul>
    </div>
  );
}

export default FeaturesComponent;
