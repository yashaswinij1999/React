import { useState } from "react";

export default function CounterTwo() {
  const initialState = {
    firstCounter: 0,
    secondCounter: 10,
  };

  const [count, setState] = useState(initialState);

  const incrementCountOne = function () {
    const addCount = { ...count, firstCounter: count.firstCounter + 1 };
    setState(addCount);
  };

  const decrementCountOne = function () {
    const minusCount = { ...count, firstCounter: count.firstCounter - 1 };
    setState(minusCount);
  };

  const incrementCountTwo = function () {
    const addCount = { ...count, secondCounter: count.secondCounter + 1 };
    setState(addCount);
  };

  const decrementCountTwo = function () {
    const minusCount = { ...count, secondCounter: count.secondCounter - 1 };
    setState(minusCount);
  };

  const resetValue = function () {
    setState(initialState);
  };

  return (
    <>
      <h1>Count : {count.firstCounter}</h1>
      <h1>Count : {count.secondCounter}</h1>
      <button onClick={incrementCountOne}>increment1</button>
      <button onClick={decrementCountOne}>decrement1</button>
      <button onClick={incrementCountTwo}>increment1</button>
      <button onClick={decrementCountTwo}>decrement1</button>
      <button onClick={resetValue}>reset</button>
    </>
  );
}
