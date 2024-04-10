import { useState } from "react";

export default function Scorekeeper({ number, target }) {
  const [players, setPlayers] = useState(new Array(number).fill(0));

  function incrementScore(index) {
    setPlayers((oldScores) => {
      return oldScores.map((el, i) => {
        if (i === index) {
          return el + 1;
        }
        return el;
      });
    });
  }

  function reset() {
    setPlayers(new Array(number).fill(0));
  }

  return (
    <>
      {players.map((el, index) => (
        <li key={index}>
          {" "}
          Players {index + 1} : {el}
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              incrementScore(index);
            }}
          >
            +1{" "}
          </button>
          {el >= target && <span>Winner</span>}
        </li>
      ))}
      <button onClick={reset}>Reset</button>
    </>
  );
}
