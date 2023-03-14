import './App.css';
import { PropTypes } from "prop-types";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from './ItemsDisplay';
import styled from "styled-components";

// const Title = styled.h1`
//   color: ${(props) => (props.color ? props.color : "black")};
// `


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  }

  return (
    <div className="container">
      {/* <Title color="red">Testing</Title> */}
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}


export default App;
