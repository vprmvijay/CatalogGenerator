import React, { useState } from "react";
import "./select3.css";

const Select3 = ({ onChange }) => {
  const options = ["Kids", "Teen", "Adult", "Senior"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptionsString, setSelectedOptionsString] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onOptionChangeHandler = (event) => {
    const selectedValue = event.target.value;
    const isChecked = event.target.checked;

    let updatedOptions;
    if (isChecked) {
      updatedOptions = [...selectedOptions, selectedValue];
    } else {
      updatedOptions = selectedOptions.filter((option) => option !== selectedValue);
    }

    setSelectedOptions(updatedOptions);
    setSelectedOptionsString(updatedOptions.join(", "));
    onChange(updatedOptions);
  };

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="selectag">
        <div onClick={handleCollapseToggle} className="s-button">
          {selectedOptionsString}
        </div>
        {isCollapsed && (
          <div className="options">
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
          </div>
        )}
      </div>
    </>
  );
};

export default Select3;
