import React from "react";

export const Tile = (props) => {
	console.log(props);
	const newArray = Object.values(props);
	const rendered = newArray.map((element, index) => (
    		 <p className="tile-title" key={index}>
			{element}</p>
		));


  return (
    <div className="tile-container">
    	{rendered}
    </div>
  );
};
