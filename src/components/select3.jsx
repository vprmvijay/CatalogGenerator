import React, { useState, useEffect } from "react";
import "./select3.css";

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
        <div className="select3" key={index}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={onOptionChangeHandler}
          />
          <label className="selectl">{option}</label>
        </div>
      ))}
    </>
  );
};

export default Select3;
