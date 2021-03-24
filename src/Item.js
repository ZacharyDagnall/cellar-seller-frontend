import React from "react";

function Item({ thing }) {
  return (
    <div className="ui-eight-wide-column">
      <h1>{thing.name}</h1>
      <p>{thing.price}</p>
    </div>
  );
}

export default Item;
