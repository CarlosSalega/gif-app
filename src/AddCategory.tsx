import { SetStateAction, useState } from "react";
import { AppProps } from "./types";

const AddCategory = ({ setCategories }: AppProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;

    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
