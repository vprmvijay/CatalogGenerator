import React, { useState } from "react";
import "./select.css";

const App = ({ onChange }) => {
  const options = ["Kids", "Teen", "Adult", "Senior"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const onOptionChangeHandler = (event) => {
    const selectedValue = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, selectedValue]);
    } else {
      const updatedOptions = selectedOptions.filter(
        (option) => option !== selectedValue
      );
      setSelectedOptions(updatedOptions);
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

export default App;