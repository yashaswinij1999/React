import React from "react";

function ButtonClicker({ message, buttonText }) {
  function ClickMe() {
    alert(message);
  }

  return (
    <>
      <button onClick={ClickMe}>{buttonText}</button>
    </>
  );
}

export default ButtonClicker;
