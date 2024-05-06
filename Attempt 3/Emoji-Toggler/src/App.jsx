import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Toggler from "./Components/Toggler";

function App() {
  return (
    <>
      <div className="min-h-screen bg-purple-200 flex items-center justify-center">
        <Toggler />
      </div>
    </>
  );
}

export default App;
