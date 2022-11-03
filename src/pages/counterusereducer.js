import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div className="page-design">
        <div class="count-card">
            <h2>Count (Using Reducer):</h2>
            <h3>{count-reduce}</h3>
        
            <div class="buttons">
              <button className="button-3" onClick={incrementCountReducer}>
                {" "}
                Increment{" "}
              </button>
              <button className="button-2" onClick={decrementCountReducer}>
                {" "}
                Decrement{" "}
              </button>
              <button className="button-1" onClick={() => setCount(0)}>
                {" "}
               Reset{" "}
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

