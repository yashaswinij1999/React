import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonClicker from "./Components/ButtonClicker";

function App() {
  return (
    <>
      <ButtonClicker message={"hai"} buttonText={"click Me"} />
      <ButtonClicker
        message={"Please Dont click Me"}
        buttonText={"Please Dont"}
      />
    </>
  );
}

export default App;
