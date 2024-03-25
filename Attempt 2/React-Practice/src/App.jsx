import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Die from "./Components/Die";
import DiceRoll from "./DiceRoll";

function App() {
  return (
    <>
      <DiceRoll />
      <DiceRoll />
    </>
  );
}

export default App;
