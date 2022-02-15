import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
const tileGen = props.data.map((contact, index) => Tile(contact));	
//const tileGenApp = props.app.map((ele, index) => Tile(ele));	

  return (
    <div>
      {tileGen}
    </div>
  );
};
