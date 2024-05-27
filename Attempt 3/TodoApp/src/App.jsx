import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./Components/TodoApp";
import { Context } from "./Hooks/Context";

function App() {
  return (
    <>
      <Context>
        <TodoApp />
      </Context>
    </>
  );
}

export default App;
