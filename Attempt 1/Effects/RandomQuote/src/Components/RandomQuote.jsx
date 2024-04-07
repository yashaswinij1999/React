import { Button } from "antd";
import { useEffect, useState } from "react";
import { Typography } from "antd";
const { Title } = Typography;
const randomURL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function RandomQuote() {
  const [quote, setQuote] = useState({ text: "" });

  const getQuote = async function () {
    const response = await fetch(randomURL);
    const responseJson = await response.json();
    const quote = responseJson.quote;
    setQuote(quote);
  };

  useEffect(() => {
    async function getIntialQuote() {
      const response = await fetch(randomURL);
      const responseJson = await response.json();
      const quote = responseJson.quote;
      setQuote(quote);
    }
    getIntialQuote();
  });

  return (
    <>
      <Title level={3}>{quote.text}</Title>
      <Button onClick={getQuote}>Click me!</Button>
    </>
  );
}
