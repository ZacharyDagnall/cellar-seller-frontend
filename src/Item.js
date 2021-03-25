import React from "react";

function Item({ thing }) {
  return (
    <a className="ui-eight-wide-column" href={thing.url} target="_blank">
      <h1>{thing.name}</h1>
      <img src={thing.img} alt={thing.name}></img>
      <p>{thing.price}</p>
    </a>
  );
}

export default Item;
