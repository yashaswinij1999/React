import { useState } from "react";

export default function Toggler() {
  const [isHappy, setEmoji] = useState(true);

  function toggle() {
    setEmoji(!isHappy);
  }

  return (
    <>
      <h1 onClick={toggle}>{isHappy ? "😄" : "😢"}</h1>
    </>
  );
}
