import { useState } from "react";
import "./Box.css";

export default function Box() {
  const [color, setColor] = useState(randColor());

  function changeColor() {
    setColor(randColor());
  }

  function randColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const holi = `rgb(${r},${g},${b})`;
    return holi;
  }

  return (
    <>
      <div
        onClick={changeColor}
        className="box"
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
}
