import "./App.css";
import Header from "./Components/Header";
import MainSection from "./Components/Main-Section";
import NavBar from "./Components/NavBar";
import Search from "./Components/Search";
import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectByName, setSelectByName] = useState(true);

  const [filterCategory, setFilterCategory] = useState("");

  const [basket, setBasket] = useState([])

  let filteredItemList = [...itemList];

  if (filterCategory) {
    filteredItemList = itemList.filter(
      (item) => item.category_name === filterCategory
    );
  }

  return (
    <div className="App">
      <Header />
      <NavBar
        selectByName={setSelectByName}
        setFilterCategory={setFilterCategory}
        filterCategory={filterCategory}
      />
      <Search
        setSelecetByName={setSelectByName}
        setItemList={setItemList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <MainSection
       basket={basket}
       setBasket={setBasket}
       itemList={filteredItemList} 
      setItemList={setItemList} />
    </div>
  );
}

export default App;
