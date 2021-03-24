import React from "react";
import Item from "./Item";

function ItemsContainer({ things }) {
  return (
    <div>
      {things.map((thing, i) => {
        return <Item key={i} thing={thing} />;
      })}
    </div>
  );
}

export default ItemsContainer;
