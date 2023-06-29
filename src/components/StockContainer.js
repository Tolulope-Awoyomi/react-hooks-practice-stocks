import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, buyStocks}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => {
        return <Stock key={stock.id} stock={stock} buyStocks={buyStocks}/>
      })}
      {/* render stock list here*/}
    </div>
  );
}

export default StockContainer;
