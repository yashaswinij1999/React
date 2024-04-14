import { useState } from "react";

export default function Toggler() {
  const [isHappy, setEmoji] = useState(true);
  const [gender, setGender] = useState(true);

  function handle() {
    setGender(!gender);
  }

  function toggle() {
    setEmoji(!isHappy);
  }

  return (
    <>
      <h1 onClick={toggle}>{isHappy ? "😄" : "😢"}</h1>
      <h1 onClick={handle}>{gender ? "👧" : "👦"}</h1>
    </>
  );
}
