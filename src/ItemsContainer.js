import React from "react";
import Item from "./Item";

function ItemsContainer({ things }) {
  return (
    <div>
      {things.map((thing) => {
        return <Item key={thing.id} thing={thing} />;
      })}
    </div>
  );
}

export default ItemsContainer;
