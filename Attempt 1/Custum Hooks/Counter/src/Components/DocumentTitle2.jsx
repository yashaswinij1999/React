import React, { useEffect } from "react";
import useCounterCustomHook from "../Hooks/useCounterCustomHook";

function DocumentTitle2() {
  const [count, incrementCount] = useCounterCustomHook(0);

  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count - {count}</p>
      <button onClick={incrementCount}>Click Me</button>
    </div>
  );
}

export default DocumentTitle2;
