import React from "react";

const Stats = ({ things }) => {
  const prices = things.map((t) => t.price);

  return (
    <table>
      <tbody>
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
      </tbody>
    </table>
  );
};

export default Stats;
