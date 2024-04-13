import React, { useState } from "react";
import useCounter from "../hooks/useCounter.jsx";

function Counter() {
  const [count, increment, reset, decrement] = useCounter();

  return (
    <>
      <span>Count : {count}</span>
      <button onClick={increment} style={{ margin: "10px" }}>
        +1
      </button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Counter;
