//import React from "react";

import React from 'react';

const MyCounter = ({ count, setCount }) => {
  if (count === 5) {
    throw new Error('Count is 5. Error Occurred.');
  }

  return (
    <div>
      <div>{count}</div>
      <p>Increase till 5 to throw Error </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

//export default Counter;

/*class MyCounter extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    if (this.state.counter === 5) {
      // Simulate an error!
      throw new Error("Error. Count Exceeded. Refresh page");
    }
    return (
      
        <div className="counter-container">
        <h1>{this.state.counter}</h1>
        <div className="counter-error">
          
        <p> Increase till 5 to see Error </p>
        <button className="button-error" onClick={this.handleClick}> INCREASE </button>
        </div>
      </div>
    );
  }
}
*/
export default MyCounter;
