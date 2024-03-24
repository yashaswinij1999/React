import { useState } from "react";
import Dice from "./Dice";
import { getRoll } from "./Util";
import Button from "./Button";

export default function LuckyN({ numDie = 2, winCheck, title }) {
  const [dice, setDice] = useState(getRoll(numDie));
  const isWinner = winCheck(dice);
  const onRoll = () => setDice(getRoll(numDie));

  return (
    <>
      <main className="lucky">
        <h1>
          {title} {isWinner && " You Win !!! "}
        </h1>
        <Dice dice={dice} />
        <Button roll={onRoll} />
      </main>
    </>
  );
}
