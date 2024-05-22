import { useReducer } from "react";

const initialValue = 0;

const reducer = function (state, action) {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialValue;

    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>The count is : {count} </h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

export default Counter;
