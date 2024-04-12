import { Button } from "antd";
import { useEffect, useState } from "react";



export default function Counter({ data }) {
  const index = Math.floor(Math.random() * data.length) + 1;

  const [count, setCount] = useState(0);

  async function getQuote() {
    const response = await fetch(randomURL);
    const responseJson = await response.json();
    const randomQuote = responseJson.quote;
    console.log(randomQuote);
  }

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
