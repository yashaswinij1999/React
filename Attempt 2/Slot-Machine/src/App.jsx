import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Slots from "./Components/Slots";

function App() {
  return (
    <>
      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍎" val3="🍒" />
    </>
  );
}

export default App;
