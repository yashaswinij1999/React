import { useState } from "react";
import Dice from "./Dice";
import { getRoll, sum } from "./Util";

export default function LuckyN({ numDie = 2, target = 7 }) {
  const [dice, setDice] = useState(getRoll(numDie));
  const isWinner = sum(dice) === target;
  const onRoll = () => setDice(getRoll(numDie));

  return (
    <>
      <main className="lucky">
        <h1>
          Lucky {target} {isWinner && " You Win !!! "}
        </h1>
        <Dice dice={dice} />
        <button style={{ margin: "10px" }} onClick={onRoll}>
          Roll again
        </button>
      </main>
    </>
  );
}
