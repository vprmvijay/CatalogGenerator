import React from 'react'

const Manual = ({ onChange }) => {
    const onOptionChangeHandler = (event) => {
      const selectedValue = event.target.value;
      onChange(selectedValue);
    };
  
    return (
      <div>
        <textarea
          onChange={onOptionChangeHandler}
          rows="6"
          type="text"
          name="Keywords"
          id="Keywords"
          placeholder="Values must be separated by comma(,)"
          required
        ></textarea>
      </div>
    );
  };
export default Manual