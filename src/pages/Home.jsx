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

  

  return (
    <>
      <h2>Test this Page for SEO and UseEffect Counter </h2>
      <div className="app">
        <div className="page-design">
            
          <div class="count-card">
            
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
