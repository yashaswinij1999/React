function RandomPokemon() {
  let rand = Math.floor(Math.random() * 150) + 1;
  let url = `    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rand}.png`;
  return (
    <>
      <div style={{ border: "1px solid", width: "450px", height: "300px" }}>
        <h1 style={{ color: "blue" }}> Pokemon : #{rand}</h1>
        <img src={url} style={{ width: "150px" }} />
      </div>
    </>
  );
}

export default RandomPokemon;
