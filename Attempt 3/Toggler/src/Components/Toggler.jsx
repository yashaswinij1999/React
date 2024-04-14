import { useState } from "react";
import useToggle from "../Hooks/useToggle";

export default function Toggler() {
  const [isHappy, toogleIsHappy] = useToggle(true);
  const [gender, toggleIsGender] = useToggle(true);

  return (
    <>
      <h1 onClick={toogleIsHappy}>{isHappy ? "😄" : "😢"}</h1>
      <h1 onClick={toggleIsGender}>{gender ? "👧" : "👦"}</h1>
    </>
  );
}
