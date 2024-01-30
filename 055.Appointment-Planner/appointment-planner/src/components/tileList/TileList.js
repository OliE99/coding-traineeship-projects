import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({ dataArray }) => {
  return (
    <div>
      {dataArray.map((item, index) => {
        const {name, ...rest} = item;
        return (
          <Tile name={name} description={rest} key={`tile-${index}`}/>
        )
      })}
    </div>
  );
};
