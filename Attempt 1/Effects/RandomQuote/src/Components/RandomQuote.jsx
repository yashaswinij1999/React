import { Button } from "antd";
import { useState } from "react";
const randomURL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function RandomQuote() {
  const [quote, setQuote] = useState({});

  const getQuote = async function () {
    const response = await fetch(randomURL);
    const responseJson = await response.json();
    const quote = responseJson.quote;
    console.log(quote);
  };

  return (
    <>
    
      <Button onClick={getQuote}>Click me!</Button>
    </>
  );
}
