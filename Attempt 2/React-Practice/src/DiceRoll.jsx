import Die from "./Components/Die";

export default function DiceRoll() {
  const style = { color: "red" };

  return (
    <>
      <h1 style={style}>Dice Roll</h1>
      <Die />
      <Die />
      <Die />
    </>
  );
}
