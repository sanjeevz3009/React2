import './App.css';
import { PropTypes } from "prop-types";
import { useState } from "react";
import SearchBar from "./SearchBar";

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  };

  return (
    <div className="App">
      <SearchBar callback={updateData} />
      <p>Name: {"name" in data ? data["name"] : "No data to display"}</p>
      <p>Price: {"name" in data ? data["price"] : "No data to display"}</p>
      <p>Name: {"type" in data ? data["type"] : "No data to display"}</p>
      <p>Name: {"brand" in data ? data["brand"] : "No data to display"}</p>
    </div>
  );
}


export default App;
