import React, { useContext } from "react";
import { countContext } from "../App";

function D() {
  const context = useContext(countContext);
  return (
    <div>
      <h1>D count : {context.countVal}</h1>
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

export default D;
