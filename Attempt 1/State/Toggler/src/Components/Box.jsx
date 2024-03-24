import { useState } from "react";
import "./Box.css";

export default function Box({ isActive, toggle }) {
  return (
    <>
      <div
        className="box"
        style={{ backgroundColor: isActive ? "red" : "black" }}
        onClick={toggle}
      ></div>
    </>
  );
}
