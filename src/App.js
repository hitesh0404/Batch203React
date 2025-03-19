import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./component/ChildComponent";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  let handlerFunctionIncrement = (event) => {
    setCount(count+1);
  };
  let handlerFunctionDecrement = (event) => {
    setCount(count-1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div class="d-grid gap-2">
          <button
            type="button"
            name=""
            id=""
            class="btn btn-primary"
            onClick={ handlerFunctionIncrement }
          >
            increase
          </button>
          <button
            type="button"
            name=""
            id=""
            class="btn btn-primary"
            onClick={handlerFunctionDecrement }
          >
            decrease
          </button>
        </div>
       <h1>{count}</h1>

        <ChildComponent name={"hello world"} />
      </header>
    </div>
  );
}

export default App;
