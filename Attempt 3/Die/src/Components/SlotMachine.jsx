function SlotMachine({ val1, val2, val3 }) {
  const isWin = val1 === val2 && val2 === val3;

  return (
    <>
      {isWin ? (
        <h1>
          {val1}
          {val2}
          {val3}
        </h1>
      ) : (
        <h2>
          {val1}
          {val2}
          {val3}{" "}
        </h2>
      )}

      <h2 style={{ color: isWin ? "green" : "red" }}>
        {isWin ? " You Win" : " You Lose "}
      </h2>
      {isWin && <h3 style={{ color: "blue" }}>Congrats !!!!</h3>}
    </>
  );
}

export default SlotMachine;
