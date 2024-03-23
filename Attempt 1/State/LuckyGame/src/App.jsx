import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LuckyN from "./Components/LuckyN";

function App() {
  return (
    <>
      <LuckyN />
      <LuckyN numDie={3} target={5} />
    </>
  );
}

export default App;
