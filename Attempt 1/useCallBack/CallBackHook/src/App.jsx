import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Components/Title";
import ParentComponent from "./Components/ParentComponent";

function App() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default App;
