import React from "react";

function Clicker({ text, msg }) {
  return (
    <>
      <button
        onClick={() => {
          alert(msg);
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Clicker;
