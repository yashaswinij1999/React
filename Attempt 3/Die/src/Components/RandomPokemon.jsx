function RandomPokemon() {
  let rand = Math.floor(Math.random() * 150) + 1;

  return (
    <>
      <h1>Random Pokemon Number : {rand}</h1>
    </>
  );
}

export default RandomPokemon;
