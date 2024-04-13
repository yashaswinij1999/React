import React, { useState } from "react";
import useToggle from "../hooks/useToggle";

function Toggle() {
  //   const [isChecked, setIsChecked] = useState(false);
  //   const handleClick = () => {
  //     setIsChecked(!isChecked);
  //   };
  //   const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  //   const handleClickTwo = () => {
  //     setIsCheckedTwo(!isCheckedTwo);
  //   };

  const [isChecked, toggle] = useToggle(false);
  const [isCheckedTwo, toggleTwo] = useToggle(false);

  return (
    <div>
      <input
        type="checkbox"
        name="test"
        id="test"
        checked={isChecked}
        onClick={toggle}
      />
      <input
        type="checkbox"
        name="test"
        id="test"
        checked={isCheckedTwo}
        onClick={toggleTwo}
      />
    </div>
  );
}

export default Toggle;
