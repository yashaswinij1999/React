import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  const [isHappy, setEmoji] = useState(true);

  function toggle() {
    setEmoji(!isHappy);
  }

  return (
    <>
      <h1 className="emoji" onClick={toggle}>
        {isHappy ? "😄" : "😢"}
      </h1>
    </>
  );
}
