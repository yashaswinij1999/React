import { Button } from "antd";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("clicked");
  });

  const handleClick = function () {
    setCount((c) => c + 1);
  };

  return (
    <>
      <p>Count : {count}</p>
      <Button onClick={handleClick}>Click me!</Button>
    </>
  );
}
