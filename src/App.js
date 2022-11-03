import React, {useState} from 'react';
import './App.css';

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
      <div className='page-design'>
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <button className = "button-3" onClick={incrementCount}> Increment </button>
          <button className = "button-2" onClick={decrementCount}> Decrement </button>
          <button className = "button-1" onClick={() => setCount(0)}> Reset </button>
        </div>
      </div>
      </div>
    </div>
  );
}