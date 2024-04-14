import React from "react";
import { levelContext } from "./LevelContext";

function Section({ level, children }) {
  return (
    <div>
      <levelContext.Provider value={level}>{children}</levelContext.Provider>
    </div>
  );
}

export default Section;
