import React, { useReducer } from "react";
import "../App.css";

const ACTIONS = {
  INCREMENT: "incrementCount",
  DECREMENT: "decrementCount",
  RESET: "resetCount",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    case ACTIONS.SET:
      return { count: state.count = action.payload };
    default:
      return state;
  }
}


export default function Reduce() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function incrementCount() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrementCount() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function resetCount() {
    dispatch({ type: ACTIONS.RESET });
  }

  function setCount(){
    dispatch({ type: ACTIONS.SET });
  }

  const handleChange = (e) => {
  dispatch({ type: "SET", payload: parseInt(e.target.value) })}
  

  return (
    <div className="app">
      
      <div className="page-design">
        <div class="count-card">
        <div>
              <input
                type="text"
                id="message"
                name="message"
                //onChange={handleChange}
                onChange ={handleChange}
                value={state.count}
              />

              <h2>Number: {state.count}</h2>
            </div>
          <h2>Count (Using UseReducer):</h2>
          <h3>{state.count}</h3>

          <div class="buttons">
            <button className="button-3" onClick={incrementCount}>
              Increment{" "}
            </button>
            <button className="button-2" onClick={decrementCount}>
              Decrement{" "}
            </button>
            <button className="button-1" onClick={resetCount}>
              {" "}
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
