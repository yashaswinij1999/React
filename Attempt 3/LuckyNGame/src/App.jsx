import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Lucky from "./Components/Lucky";
import { greaterFour, isEqual } from "./Components/Util";

function App() {
  return (
    <>
      <Lucky
        noOfDie={2}
        winCheck={greaterFour}
        title={" greater than four    "}
      />
      <Lucky noOfDie={2} winCheck={isEqual} title={"is equal"} />
    </>
  );
}

export default App;
