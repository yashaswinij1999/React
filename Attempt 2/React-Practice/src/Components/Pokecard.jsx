import React from "react";

function Pokecard() {
  const random = Math.floor(Math.random() * 150) + 1;
  const url =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}` +
    `.png`;
  return (
    <>
      <h1>Pokemon #{random}</h1>
      <img src={url} alt="pokemon"></img>
    </>
  );
}

export default Pokecard;
