import React, { useContext } from "react";
import { countContext } from "../App";

function F() {
  const context = useContext(countContext);
  return (
    <div>
      <h1>F count : {context.countVal}</h1>
      <button onClick={() => context.dispatchAction("increment")}>
        increment
      </button>
      <button onClick={() => context.dispatchAction("decrement")}>
        decrement
      </button>
      <button onClick={() => context.dispatchAction("reset")}>reset</button>
    </div>
  );
}

export default F;
