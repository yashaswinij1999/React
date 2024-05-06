import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clicker from "./Components/Clicker";

function App() {
  return (
    <>
      <Clicker text="Click Me" msg="Thanks for Clicking Me" />
      <Clicker text="Dont Click" msg="Please Dont Click Me" />
    </>
  );
}

export default App;
