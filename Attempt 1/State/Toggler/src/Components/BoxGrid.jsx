import { useState } from "react";
import Box from "./Box";
import "./BoxGrid.css";
import Button from "./Button";

export default function BoxGrid() {
  const [boxes, setActive] = useState([
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
  ]);

  const reset = () => {
    setActive([false, false, false, false, false, false, false, false]);
  };

  const toggle = (id) => {
    setActive((oldBoxes) => {
      return oldBoxes.map((el, i) => {
        if (i === id) {
          return !el;
        } else {
          return el;
        }
      });
    });
  };

  return (
    <>
      <div className="container">
        {boxes.map((el, i) => (
          <Box key={i} isActive={el} toggle={() => toggle(i)} />
        ))}
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}
