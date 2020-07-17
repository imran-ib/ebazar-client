import React, { ReactElement } from "react";

interface Props {
  nextStep?: any;
  previousStep?: any;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
}

function TagsComponent(props: Props): ReactElement {
  const tags = props.tags;
  const setTags = props.setTags;

  const RemoveTag = (i: number) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags([...newTags]);
  };

  const inputKeyDown = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    //@ts-ignore
    if (e.key === "Enter" && val) {
      e.preventDefault();
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      e.currentTarget.value = "";
      //@ts-ignore
    } else if (e.key === "Backspace" && !val) {
      RemoveTag(tags.length - 1);
    }
  };
  return (
    <div className="input-tag">
      <span className="step-text mb-3 ml-3">
        Add Tags to Your Product *{" "}
        <small className="ml-2 text-info"> (Hit Enter To Add) </small>
      </span>

      <ul className="input-tag__tags">
        {tags?.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                RemoveTag(i);
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

export default TagsComponent;
