import React, { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
import { useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(5000);

  const incrementCount = useCallback(
    function () {
      setCount(count + 1);
    },
    [count]
  );

  const incrementSalary = useCallback(
    function () {
      setSalary(salary + 1);
    },
    [salary]
  );

  return (
    <div>
      <Title data="useCallBack" />
      <Count text={"count"} value={count} />
      <Button text={"incrementCount"} callBack={incrementCount}></Button>
      <Count text={"salary"} value={salary} />
      <Button text={"incrementSalary"} callBack={incrementSalary}></Button>
    </div>
  );
}

export default ParentComponent;
