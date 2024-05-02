import React from "react";

function Button({ text, callBack }) {
  console.log("Button re-rendering", text);
  return (
    <div>
      <button onClick={callBack}>{text}</button>
    </div>
  );
}

export default React.memo(Button);
