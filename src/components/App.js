import React, {useEffect, useState} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([])
  const [selectStockType, setSelectStockType] = useState("Tech")
  const [sort, setSort] = useState("Alphabetically")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((stocks) => setStocks(stocks))
  }, [])

const filteredStocks = stocks.filter(stock => stock.type === selectStockType).sort((a, b) => {
      if (sort === "Alphabetically") {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
    
      // names must be equal
      return 0;
      } else if (sort === "Price") {
        return(a.price - b.price)
      } })

  function sorting(e) {
    setSort(e.target.value)
  }
  return (
    <div>
      <Header />
      <MainContainer stocks={filteredStocks} setStocks={setStocks} filteredStocks={filteredStocks} setSelectStockType={setSelectStockType} sorting={sorting} setSort={setSort}/>
    </div>
  );
  }

export default App;
