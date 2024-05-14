import React, { useState } from "react";

function ScoreKeeper({ noOfPlayers, target }) {
  const [scores, setScores] = useState(new Array(noOfPlayers).fill(0));

  const increment = function (idx) {
    setScores((oldScores) => {
      return oldScores.map((el, index) => {
        if (index === idx) return el + 1;
        return el;
      });
    });
  };

  return (
    <>
      <ul style={{ listStyleType: "none" }}>
        {scores.map((el, index) => (
          <li key={index}>
            Player {index + 1}: {el}
            <button
              onClick={() => {
                increment(index);
              }}
            >
              +1
            </button>
            {el >= target ? "winner" : ""}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ScoreKeeper;
