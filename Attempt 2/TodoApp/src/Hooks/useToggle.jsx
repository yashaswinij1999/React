import { useState } from "react";

export default function Toggle(initialValue) {
  const [state, setState] = useState(initialValue);

  function handleState() {
    setState(!state);
  }

  return [state, handleState];
}
