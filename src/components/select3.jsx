import React, { useState, useEffect } from "react";
import "./select.css";

const Select3 = ({ onChange }) => {
  const options = ["Kids", "Teen", "Adult", "Senior"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  const onOptionChangeHandler = (event) => {
    const selectedValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        selectedValue,
      ]);
    } else {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.filter((option) => option !== selectedValue)
      );
    }
  };

  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={onOptionChangeHandler}
          />
          <label>{option}</label>
        </div>
      ))}
    </>
  );
};

export default Select3;
