import React from "react";
import Item from "./Item";
import Stats from "./Stats";

function ItemsContainer({
  things,
  api,
  type,
  user,
  setThings = () => {
    return [];
  },
}) {
  return (
    <div>
      {things.length !== 0 ? <Stats things={things} /> : null}
      {things.map((thing) => {
        return (
          <Item
            key={thing.id}
            thing={thing}
            type={type}
            setThings={setThings}
            api={api}
            user={user}
          />
        );
      })}
    </div>
  );
}

export default ItemsContainer;
