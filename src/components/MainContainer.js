import React, {useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, setStocks, setSelectStockType, sorting, setSort}) {
  const [mySelectedStocks, setMySelectedStocks] = useState([])
  
  function buyStocks(myStock) {
    setMySelectedStocks([...mySelectedStocks, myStock])
  }

  function deleteStock(deleteStock) {
    const updatedStocks = mySelectedStocks.filter((stock) => stock.id !== deleteStock.id)
    setMySelectedStocks(updatedStocks)
  }

  return (
    <div>
      <SearchBar setSelectStockType={setSelectStockType} sorting={sorting} setSort={setSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={setStocks} buyStocks={buyStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} setStocks={setStocks} mySelectedStocks={mySelectedStocks} buyStocks={deleteStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
