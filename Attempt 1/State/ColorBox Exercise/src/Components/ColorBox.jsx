import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ colors }) {
  const [color, setColor] = useState("red");

  function changeColor() {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
  }

  return (
    <div
      className="box"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}
