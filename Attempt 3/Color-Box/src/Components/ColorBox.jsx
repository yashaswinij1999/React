import React, { useState } from "react";

const randColor = function () {
  const r = Math.floor(Math.random() * 250) + 1;
  const g = Math.floor(Math.random() * 250) + 1;
  const b = Math.floor(Math.random() * 250) + 1;
  return `rgb(${r},${g},${b})`;
};

function ColorBox() {
  const [color, setColor] = useState("red");

  function changeColor() {
    setColor(randColor);
  }

  return (
    <div
      style={{
        width: "90px",
        height: "80px",
        backgroundColor: color,
      }}
      onClick={changeColor}
    ></div>
  );
}

export default ColorBox;
