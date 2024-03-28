import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "./Components/Box";
import BoxGrid from "./Components/BoxGrid";

function App() {
  return (
    <>
      <BoxGrid val={40} />
    </>
  );
}

export default App;
