import React from "react";

export const ContactPicker = (props) => {
	
	const newArray = Object.values(props.contacts);
	console.log(newArray);
	const rendered = newArray.map((element, index) => (
    		 <option key={index}>{element.name}</option>
    		));

  return (
    <select onChange={props.setContact}>
    	<option default>Select an option</option>
    	{rendered}
    </select>
  );
};
