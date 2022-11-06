import React from "react";
import { useState } from "react";

//import { ErrorBoundary } from "react-error-boundary";
//import { useErrorHandler } from "react-error-boundary";
//import  ErrorPage  from '../Components/Errorpage'
//import  ClickCounter  from "../Components/clickcounter";
//import  Fallback from "../Components/Fallback.jsx";

function Home() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount(count + 1);
  };
  let decrementCount = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    setCount(parseInt(event.target.value))
    console.log("value is:", event.target.value);
  };

  return (
    <>
      <div className="app">
        <div className="page-design">
          <div class="count-card">
            <div>
              <input
                type="text"
                id="message"
                name="message"
                onChange={handleChange}
                value={count}
              />

              <h3>Count: {count}</h3>
            </div>
            <h2>Count (UseEffect):</h2>
            <h3>{count}</h3>
            <div class="buttons">
              <button className="button-3" onClick={incrementCount}>
                {" "}
                Increment{" "}
              </button>
              <button className="button-2" onClick={decrementCount}>
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
    </>
  );
}

export default Home;
