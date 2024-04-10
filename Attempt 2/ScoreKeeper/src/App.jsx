import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Scorekeeper from "./Components/ScoreKeeper";

function App() {
  return (
    <>
      <Scorekeeper number={4} target={5} />
    </>
  );
}

export default App;
