import { useState } from "react";

function useToggle() {
  const [val, setVal] = useState(false);
  const toggle = () => {
    setVal(!val);
  };

  return [val, toggle];
}

export default useToggle;
