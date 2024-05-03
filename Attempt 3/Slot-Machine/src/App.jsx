import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SlotMachine from "./Components/SlotMachine";

function App() {
  return (
    <>
      <SlotMachine val1={"🍒"} val2={"🍒"} val3={"🍒"} />
      <SlotMachine val1={"🍒"} val2={"🍎"} val3={"🍒"} />
    </>
  );
}

export default App;
