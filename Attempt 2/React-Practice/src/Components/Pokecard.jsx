import React from "react";

function Pokecard() {
  const random = Math.floor(Math.random() * 150) + 1;
  return <h1>Pokemon #{random}</h1>;
}

export default Pokecard;
