import React from "react";

function Die({ val }) {
  const random = Math.floor(Math.random() * 6) + 1;

  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        backgroundColor: "purple",
        border: "1px solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        margin: "5px",
      }}
    >
      <div style={{ fontWeight: "bolder", fontSize: "26px", color: "white" }}>
        {val}
      </div>
    </div>
  );
}

export default Die;
