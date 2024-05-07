import React from "react";
import "./ColorBoxGrid.css";
import ColorBox from "./ColorBox";

function ColorBoxGrid() {
  const box = [];

  for (let i = 0; i < 25; i++) {
    box.push(<ColorBox />);
  }

  return <div className="box">{box}</div>;
}

export default ColorBoxGrid;
