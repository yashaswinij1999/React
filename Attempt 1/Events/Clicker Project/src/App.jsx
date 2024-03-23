import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clicker from "./Components/Clicker";

function App() {
  return (
    <>
      <Clicker message="Good Morning" btnText="Click Me" />
      <Clicker message="Namaste" btnText="Welcome" />
    </>
  );
}

export default App;
