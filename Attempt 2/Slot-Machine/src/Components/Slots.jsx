export default function Slots({ val1, val2, val3 }) {
  const isWin = val1 === val2 && val2 === val3;

  return (
    <>
      {isWin ? (
        <h1>
          {val1} {val2} {val3}{" "}
        </h1>
      ) : (
        <h2>
          {val1} {val2} {val3}
        </h2>
      )}
      <h2 style={{ color: isWin ? "green" : "red" }}>
        {isWin ? "Winner" : "Loser"}
      </h2>
      <h3 style={{ color: "blue" }}>{isWin && "Congrats"}</h3>
    </>
  );
}
