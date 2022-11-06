import React from 'react';
import MyCounter from './MyCounter';
import MyErrorBoundary from './MyErrorBoundary';


class Boundary extends React.Component {
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