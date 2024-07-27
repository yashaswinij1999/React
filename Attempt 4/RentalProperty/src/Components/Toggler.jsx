import { useState } from "react";

function Toggler() {
  const [isHappy, setIsHAppy] = useState(true);

  function handleIsHappy() {
    setIsHAppy(!isHappy);
  }

  return <h1 onClick={handleIsHappy}>{isHappy ? "😄" : "😲"}</h1>;
}

export default Toggler;
