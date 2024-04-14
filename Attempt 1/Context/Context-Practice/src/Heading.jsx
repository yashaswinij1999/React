import React from "react";
import { useContext } from "react";
import { levelContext } from "./Components/LevelContext";

function Heading({ title }) {
  const level = useContext(levelContext);

  switch (level) {
    case 1:
      return <h1>{title}</h1>;

    case 2:
      return <h2>{title}</h2>;

    case 3:
      return <h3>{title}</h3>;

    case 4:
      return <h4>{title}</h4>;

    case 5:
      return <h5>{title}</h5>;

    case 6:
      return <h6>{title}</h6>;

    default:
      break;
  }
}

export default Heading;
