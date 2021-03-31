import React from "react";

const Stats = ({ things }) => {
  const prices = things.map((t) => t.price);

  return (
    <div className="stat-table">
      <h4>Collection Stats</h4>
      <table>
        <tr>
          <th>Number of Items</th>
          <th>Average Price</th>
          <th>Lowest Price</th>
          <th>Highest Price</th>
        </tr>
        <tr>
          <td>{prices.length}</td>
          <td>
            ${(prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2)}
          </td>
          <td>${Math.min(...prices).toFixed(2)}</td>
          <td>${Math.max(...prices).toFixed(2)}</td>
        </tr>
      </table>
    </div>
  );
};

export default Stats;
