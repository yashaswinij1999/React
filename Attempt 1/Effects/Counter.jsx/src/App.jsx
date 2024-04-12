import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Components/Counter";

const data = [
  "Today is Good Day",
  "Aham Brahamsmi",
  "Failure is Stepping Stone for Success",
];

function App() {
  return (
    <>
      <Counter data={data} />
    </>
  );
}

export default App;
