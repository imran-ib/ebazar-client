import React, { ReactElement } from "react";

interface Props {
  nextStep?: any;
  previousStep?: any;
  setColor: React.Dispatch<React.SetStateAction<string[]>>;
  Color: string[];
}

function ColorComponent(props: Props): ReactElement {
  const { setColor, Color } = props;

  const RemoveColor = (i: number) => {
    const newColor = [...Color];
    newColor.splice(i, 1);
    setColor([...newColor]);
  };

  const inputKeyDown = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    //@ts-ignore
    if (e.key === "Enter" && val) {
      e.preventDefault();
      if (Color.find((Color) => Color.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setColor([...Color, val]);
      e.currentTarget.value = "";
      //@ts-ignore
    } else if (e.key === "Backspace" && !val) {
      RemoveColor(Color.length - 1);
    }
  };
  return (
    <div className="input-tag">
      <span className="step-text mb-3 ml-3">
        In What Colors Your Product Is Available *{" "}
        <small className="ml-2 text-info"> (Hit Enter To Add) </small>
      </span>
      <ul className="input-tag__tags">
        {Color.map((Color, i) => (
          <li key={Color}>
            {Color}
            <button
              type="button"
              onClick={() => {
                RemoveColor(i);
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

export default ColorComponent;
