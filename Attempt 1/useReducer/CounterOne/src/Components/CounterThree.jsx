import { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
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

export default function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [countTwo, dispatchOne] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>The count is : {count} </h1>

      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <h1>The count is : {countTwo} </h1>
      <button
        onClick={() => {
          dispatchOne("increment");
        }}
      >
        IncrementTwo
      </button>
      <button
        onClick={() => {
          dispatchOne("decrement");
        }}
      >
        DecrementTwo
      </button>
      <button
        onClick={() => {
          dispatchOne("reset");
        }}
      >
        Reset
      </button>
    </>
  );
}
