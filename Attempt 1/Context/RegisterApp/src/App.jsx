import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import InputField from "./Components/InputField";

function App() {
  return (
    <>
      <NavBar />
      <div className="page" style={{ width: "97.5vw", height: "90vh" }}>
        <InputField />
      </div>
    </>
  );
}

export default App;
