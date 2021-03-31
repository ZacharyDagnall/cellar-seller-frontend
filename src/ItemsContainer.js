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
  const [filterBy, setFilterBy] = useState("All");

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

  const filteredThings = sortedThings.filter(thing => {
    switch (filterBy) {
      case "ebay":
        return thing.url.includes("ebay");
      case "collectors":
        return thing.url.includes("collectors")
      default:
        return true;
      }


  })

  return (
    <>
      {filteredThings.length !== 0 ? (
        <div className="stat-holder">
          <Stats things={filteredThings} />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="none">Sort by... </option>
            <option value="price high">Price High to Low</option>
            <option value="price low">Price Low to High</option>
          </select>
          <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
            <option value="All">Show All Results</option>
            <option value="ebay">Only eBay Results</option>
            <option value="collectors">Only Collectors.com Results</option>
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
        {filteredThings.map((thing) => {
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
