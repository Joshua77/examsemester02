import React from "react";
//import MyCounter from "./MyCounter";
//import MyErrorBoundary from './MyErrorBoundary';

/*class Boundary extends React.Component {
  refreshPage = () => {
   // history.go(0);
  };

  render() {
    return (
      <div>
        <MyErrorBoundary>
          <MyCounter />
        </MyErrorBoundary>
      </div>
    );
  }
}

export default Boundary;
*/

//import React, { useState } from 'react';
import Counter from "./MyCounter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <div className="app">
        <div className="page-design">
        <h1> ERROR </h1>
          <div className="counter-card">
          <h3>Something went wrong! Go back to Home Page </h3>
          <br></br>
          <div className="link-home">
          <Link to="/"> Home Page </Link>
          <br></br>
          <br></br>
          </div>
          <p>Reason for Error </p>
          <br></br>
          <pre>{error.message}</pre>
          
          <br></br>
          <button className="button-3" onClick={resetErrorBoundary}>Try again</button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

const Epp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setCount(0)}
      >
        <Counter count={count} setCount={setCount} />
      </ErrorBoundary>
    </div>
  );
};

export default Epp;
