import { useState } from "react";

export default function ScoreKeeper(props) {
  const { numPlayers, target } = props;

  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  const increaseCount = (index) => {
    setScores((oldScores) => {
      return oldScores.map((score, i) => {
        if (i === index) return score + 1;
        return score;
      });
    });
  };

  const reset = () => {
    setScores((oldScores) => [...oldScores.fill(0)]);
  };

  return (
    <>
      {scores.map((el, index) => (
        <li key={index}>
          Player {index + 1} : {el}{" "}
          <button
            onClick={() => {
              increaseCount(index);
            }}
          >
            +1
          </button>
          {el >= target && "Winner"}
        </li>
      ))}
      <button onClick={reset}>Reset</button>
    </>
  );
}
