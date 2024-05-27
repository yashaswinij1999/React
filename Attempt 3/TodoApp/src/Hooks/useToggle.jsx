import React, { useState } from "react";

function useToggle({ initialValue }) {
  const [toggle, setToggle] = useState(initialValue);

  function handleToggle() {
    setToggle(!toggle);
  }

  return [toggle, handleToggle];
}

export default useToggle;
