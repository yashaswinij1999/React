import React, { useEffect, useState } from "react";

export default function DocumentTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count - ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count - {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
