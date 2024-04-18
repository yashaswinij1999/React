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
      <InputField />
    </>
  );
}

export default App;
