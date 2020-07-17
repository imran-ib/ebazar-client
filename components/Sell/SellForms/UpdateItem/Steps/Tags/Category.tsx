import React, { ReactElement } from "react";

interface Props {
  nextStep?: any;
  previousStep?: any;
  setCategory: React.Dispatch<React.SetStateAction<string[]>>;
  category: string[];
}

function CategoryComponent(props: Props): ReactElement {
  const { setCategory, category } = props;

  const RemoveCategory = (i: number) => {
    const newCategory = [...category];
    newCategory.splice(i, 1);
    setCategory([...newCategory]);
  };

  const inputKeyDown = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    //@ts-ignore
    if (e.key === "Enter" && val) {
      e.preventDefault();
      if (
        category.find(
          (category) => category.toLowerCase() === val.toLowerCase()
        )
      ) {
        return;
      }
      setCategory([...category, val]);
      e.currentTarget.value = "";
      //@ts-ignore
    } else if (e.key === "Backspace" && !val) {
      RemoveCategory(category.length - 1);
    }
  };
  return (
    <div className="input-tag ">
      <span className="step-text mb-3 ml-3">
        Categorize Your Product *{" "}
        <small className="ml-2 text-info"> (Hit Enter To Add) </small>{" "}
      </span>
      <ul className="input-tag__tags">
        {category.map((category, i) => (
          <li key={category}>
            {category}
            <button
              type="button"
              onClick={() => {
                RemoveCategory(i);
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

export default CategoryComponent;
