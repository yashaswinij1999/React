import React from "react";

function Button({ roll }) {
  return (
    <button style={{ display: "flex", margin: "5px" }} onClick={() => roll()}>
      Roll Again
    </button>
  );
}

export default Button;
