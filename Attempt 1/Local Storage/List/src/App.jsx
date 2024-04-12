import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import List from "./Components/List";
import Test from "./Components/Test";

const data = [
  {
    id: 1,
    task: "buy milk",
  },
  {
    id: 2,
    task: "study",
  },
  {
    id: 3,
    task: "help others in daily chores",
  },
  {
    id: 4,
    task: "buy groceries",
  },
];

function App() {
  return (
    <>
      {/* <List data={data} /> */}
      <Test data={data} />
    </>
  );
}

export default App;
