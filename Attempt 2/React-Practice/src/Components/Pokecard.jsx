import React from "react";
import "./Pokemon.css";

function Pokecard() {
  const random = Math.floor(Math.random() * 150) + 1;
  const url =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${random}` +
    `.png`;
  return (
    <div className="main">
      <h1 className="heading">Pokemon #{random}</h1>
      <img className="img" src={url} alt="pokemon"></img>
    </div>
  );
}

export default Pokecard;
