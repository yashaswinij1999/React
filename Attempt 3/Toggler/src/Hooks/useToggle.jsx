import { useState } from "react";

function useToggle(initialValue) {
  const [toggle, setToggle] = useState(initialValue);

  function toggleFunction() {
    setToggle(!toggle);
  }

  return [toggle, toggleFunction];
}

export default useToggle;
