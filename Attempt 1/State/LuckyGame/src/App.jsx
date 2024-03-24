import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LuckyN from "./Components/LuckyN";
import { isEqual } from "./Components/Util";
import { lessThan4 } from "./Components/Util";

function App() {
  return (
    <>
      <LuckyN numDie={2} winCheck={isEqual} title="is Same" />
      <LuckyN numDie={2} winCheck={lessThan4} title="roll less than four" />
    </>
  );
}

export default App;
