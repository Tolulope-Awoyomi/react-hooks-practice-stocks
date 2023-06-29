import React from "react";
import Stock from "./Stock";

function PortfolioContainer({mySelectedStocks, buyStocks}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      { 
        mySelectedStocks.map(stock => {
          return (
        <Stock key={stock.id} stock={stock} buyStocks={() => buyStocks(stock)}/>)
        })
        //render your portfolio stocks here
      }
    </div>
  );
}

export default PortfolioContainer;
