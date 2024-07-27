import { useState } from "react";

const colors = [
  "black",
  "blue",
  "orange",
  "yellow",
  "brown",
  "grey",
  "purple",
  "violet",
  "magenta",
];

function randColor() {
  return Math.floor(Math.random() * colors.length);
}

function Box() {
  const [color, setColor] = useState("red");

  function handleColor() {
    const rand = randColor();
    setColor(colors[rand]);
  }

  return (
    <div
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: color,
      }}
      onClick={handleColor}
    ></div>
  );
}

export default Box;
