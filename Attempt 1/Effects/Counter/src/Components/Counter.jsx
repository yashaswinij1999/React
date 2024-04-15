import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = function () {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    document.title = `You have clicked count ${count} no of times`;
  });

  return (
    <>
      <p>Count : {count} </p>
      <button onClick={increment}>+1</button>
    </>
  );
}
