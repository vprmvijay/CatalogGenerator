import React from "react";
import './select.css'
const App = ({ onChange}) => {
	const options = ['Kids', 'Teen','Adult','Senior'];
	const onOptionChangeHandler = (event) => {
		const selectedValue = event.target.value;
	    onChange(selectedValue);
		
    };
	return (
		<>
			
				
				<select onChange={onOptionChangeHandler}>

					
					{options.map((option, index) => {
						return <option key={index} >
							{option}
						</option>
					})}
				</select>
			
		</>
	);
};

export default App;
