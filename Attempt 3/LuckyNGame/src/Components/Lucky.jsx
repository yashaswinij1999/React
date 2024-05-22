import React, { useState } from "react";
import DieRoll from "./DieRoll";
import { getRoll } from "./Util";
import Button from "./Button";

function Lucky({ noOfDie, winCheck, title }) {
  const [dice, setDice] = useState(getRoll(noOfDie));
  const roll = () => setDice(getRoll(noOfDie));
  const isWinner = winCheck(dice);

  return (
    <>
      <h1>
        {title} {"    "} {isWinner && "  You win !!!!"}
      </h1>
      <DieRoll dice={dice} />
      <Button roll={roll} />
    </>
  );
}

export default Lucky;
