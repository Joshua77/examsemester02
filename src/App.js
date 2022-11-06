import { useState } from "react";
import { Helmet } from "react";
//import { Links, Route, BrowserRoutes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/Page404";

//import { ErrorBoundary } from "react-error-boundary";

//import Reducer from "./Components/usereducer.js";
// import { ErrorBoundary } from "./Components/error.js";
//import { NotFound } from "./Components/page404.js";
//import { Fallback } from "./Components/Fallback.js";
//import Reduce from "./components/usereducer.js";
// import UseState from ".Components/useState.js";

//NAVIGATION FUNCTION

// CODE SECTION FOR THE REDUCER COMPONENT

/*function ReducerPage(){
  return(
    <Reduce />
  )

}
*/

//CODE SECTION FOR THE ERROR BOUNDARY FUNCTION
/*
const ErrorHandler = (error, errorInfo)=>{
  console.log('Logging', error, errorInfo)
}

function ErrorPage(){
  return(
    <ErrorBoundary FallBackCompnent={Fallback} onError = {ErrorHandler}>
      <ClickCounter />
    </ErrorBoundary>
    
  )
}
//ADD NAVIGATION ABOVE HERE



// CODE SECTION FOR THE 404 PAGE

function PageNotFound (){
  return(
    <NotFound />
    
  )

}
//ADD NAVIGATION above here

*/

// CODE SECTION FOR THE ROOT COMPONENT
/*const MAX_COUNT_ALLOWED = 4
export const  ClickCounter = () =>{
  const [counter, setCounter] = useState(0);
  //const handleError = useErrorHandler()
}

  const handleClick = ()=>{
    try{
        if(counter === MAX_COUNT_ALLOWED){
            throw new Error('Count Limit Exceeded')
        }
        else {setCounter((c) => c+1)}
    }
    catch (e){
        handleError(e)
        //console.log("clickCounter error", e)
    }}
*/
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
