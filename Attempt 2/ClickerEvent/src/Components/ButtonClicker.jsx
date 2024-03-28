import React from "react";

function ButtonClicker() {
  function ClickMe() {
    alert("Thanks for clicking");
  }

  function dontClick() {
    alert("Please dont click");
  }

  return (
    <>
      <button onClick={ClickMe}>Click Me</button>
      <button onClick={dontClick}>Don't Click</button>
    </>
  );
}

export default ButtonClicker;
