import React from "react";

function RandomPokemon() {
  const randNum = Math.floor(Math.random() * 150) + 1;
  const src = `    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`;
  return (
    <>
      <div className="card flex justify-center items-center min-h-screen">
        <div className="w-64 border-2 border-black h-72 text-center p-3">
          <h1 className="text-2xl text-blue-600 font-bold">
            Pokemon #{randNum}
          </h1>
          <img src={src} />
        </div>
      </div>
    </>
  );
}

export default RandomPokemon;
