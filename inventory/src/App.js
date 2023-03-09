import './App.css';
import Info from './Info.js';
import { PropTypes } from "prop-types";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <Info title="Inventory" />
      <ButtonsState />
    </div>
  );
}


function ButtonsState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0)

  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  }

  const updateCounterClicked = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}


function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  )
}

export default App;
