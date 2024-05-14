import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ScoreKeeper from "./Components/ScoreKeeper";

function App() {
  return (
    <>
      <ScoreKeeper noOfPlayers={3} target={5} />
    </>
  );
}

export default App;
