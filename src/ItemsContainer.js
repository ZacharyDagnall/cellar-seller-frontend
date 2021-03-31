import React, { useState } from "react";
import Item from "./Item";
import Stats from "./Stats";
import CardDeck from "react-bootstrap/CardDeck";

function ItemsContainer({
  things,
  api,
  type,
  user,
  setThings = () => {
    return [];
  },
}) {
  const [sortBy, setSortBy] = useState("none");

  const sortedThings = things.sort((a, b) => {
    switch (sortBy) {
      case "price high":
        return b.price - a.price;
      case "price low":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  return (
    <>
      {sortedThings.length !== 0 ? (
        <div className="stat-holder">
          <Stats things={sortedThings} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="none">Sort by... </option>
            <option value="price high">Price High to Low</option>
            <option value="price low">Price Low to High</option>
          </select>
        </div>
      ) : null}
      <CardDeck
        style={{
          display: "grid",
          gridTemplateColumns: "350px 350px 350px",
          // gridTemplateRows: "repeat(500px)",
          margin: "15px 15px 15px 15px"
          // flexDirection: "row",
          // flexWrap: "wrap",
          // width: "100em",
        }}
      >
        {sortedThings.map((thing) => {
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
      </CardDeck>
    </>
  );
}

export default ItemsContainer;
