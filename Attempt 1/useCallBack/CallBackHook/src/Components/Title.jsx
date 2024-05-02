import React from "react";
import { memo } from "react";

function Title({ data }) {
  console.log("Title rendering");
  return <h1>{data}</h1>;
}

export default React.memo(Title);
