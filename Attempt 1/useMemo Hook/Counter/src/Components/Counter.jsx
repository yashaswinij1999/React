import React, { useMemo } from "react";
import { useState } from "react";

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = function () {
    setCountOne(countOne + 1);
  };

  const even = useMemo(() => {
    let i = 0;
    while (i < 200000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  const incrementTwo = function () {
    setCountTwo(countTwo + 1);
  };

  return (
    <>
      <button
        className="block border-2 p-2 rounded-lg m-auto my-2 "
        onClick={incrementOne}
      >
        CountOne - {countOne}
      </button>
      <span>{even ? "even" : "odd"}</span>
      <button
        className="block border-2 p-2 rounded-lg m-auto my-2"
        onClick={incrementTwo}
      >
        CountTwo - {countTwo}
      </button>
    </>
  );
}

export default Counter;
