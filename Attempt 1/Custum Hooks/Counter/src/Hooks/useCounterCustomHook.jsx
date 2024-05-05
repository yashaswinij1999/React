import { useState } from "react";

export default function useCounterCustomHook(initialValue) {
  const [count, setCount] = useState(initialValue);

  const incrementCount = function () {
    setCount(count + 1);
  };

  return [count, incrementCount];
}
