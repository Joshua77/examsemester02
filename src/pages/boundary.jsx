import React from "react";
import MyCounter from "./MyCounter";
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
      <h1> ERROR </h1>
      <p>Something went wrong! </p>
      <p> Go back to Home Page </p>
      <Link to="/"> Home Page </Link>
      <p>Reason for Error </p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
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
