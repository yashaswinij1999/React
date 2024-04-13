import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(1);

  const increment = function () {
    setCount((c) => c + 1);
  };

  const reset = function () {
    setCount(0);
  };

  const decrement = function () {
    setCount((c) => c - 1);
  };

  return [count, increment, reset, decrement];
}

export default useCounter;
