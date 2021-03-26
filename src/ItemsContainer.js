import React from "react";
import Item from "./Item";

function ItemsContainer({
  things,
  api,
  type,
  setThings = () => {
    return [];
  },
}) {
  return (
    <div>
      {things.map((thing) => {
        return (
          <Item
            key={thing.id}
            thing={thing}
            type={type}
            setThings={setThings}
            api={api}
          />
        );
      })}
    </div>
  );
}

export default ItemsContainer;
