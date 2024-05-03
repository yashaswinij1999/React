import React from "react";

function SlotMachine({ val1, val2, val3 }) {
  const win = val1 === val2 && val2 === val3;

  return (
    <>
      <h1 className="font-extrabold text-4xl">
        {val1} {val2} {val3}
      </h1>
      <h2
        className={`text-2xl font-semibold ${
          win ? "text-green-500" : "text-red-700"
        } my-2 `}
      >
        {win ? "You win!!" : "You Lose"}
      </h2>
      {win && (
        <h3 className="text-xl my-2 font-medium text-blue-700">Congrats</h3>
      )}
    </>
  );
}

export default SlotMachine;
