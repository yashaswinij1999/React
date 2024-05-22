import { createContext, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";

const initialValue = 0;
export const countContext = createContext();

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialValue;

    default:
      return initialValue;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>The count is : {count}</h1>
      <countContext.Provider
        value={{ countVal: count, dispatchAction: dispatch }}
      >
        <A />
        <B />
        <C />
      </countContext.Provider>
    </>
  );
}

export default App;
