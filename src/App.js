import { useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/Page404";


export default function App() {
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
    <div className="app">
      <BrowserRouter>
        <Route>
          <Helmet>
            <title>Atschool Exam By Joshua (Semester 2)</title>
            <meta
              name="the root component"
              content="Get access to superb counter with useeffect usereducer with React"
            />
            <meta name="keywords" content="Programming, SEO, technical seo, React, react, usereffects, hooks" />
          </Helmet>
          <Route exact path="/" component={Home} />
          <Route path="*" component={PageNotFound} />
        </Route>
      </BrowserRouter>
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
  );
}
