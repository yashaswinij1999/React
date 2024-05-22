import React from "react";
import Die from "./Die";

function DieRoll({ dice }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "2px solid",
          width: "80vw",
          height: "20vh",
          borderRadius: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dice.map((el) => (
          <Die val={el} />
        ))}
      </div>
    </>
  );
}

export default DieRoll;
