import './App.css';
import Info from './Info.js';
import { PropTypes } from "prop-types";

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <Info title="Inventory" />
      <AddItem text="tim" number={2} />
      <AddItem text="joe" />
      <AddItem text="james" />
      <AddItem />
    </div>
  );
}


function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  )
}


AddItem.defaultProps = {
  number: 4,
  text: "Test"
}


AddItem.propTypes = {
  number: PropTypes.number,
}

export default App;
