import { useState } from "react";

export default function Toggler() {
  const [happy, setHappy] = useState(true);

  function toggle() {
    setHappy(!happy);
  }

  return (
    <>
      <h1 className="text-9xl" onClick={toggle}>
        {happy ? "😄" : "😢"}
      </h1>
    </>
  );
}
