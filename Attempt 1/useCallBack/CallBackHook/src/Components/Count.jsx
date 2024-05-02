import React from "react";

function Count({ text, value }) {
  console.log("Count re-rendering", text);
  return (
    <p>
      {text} - {value}
    </p>
  );
}

export default React.memo(Count);
