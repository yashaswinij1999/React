import { useState } from "react";

export default function useInputField(initialValue) {
  const [state, setState] = useState(initialValue);

  function reset() {
    setState(initialValue);
  }

  function handleChange(e) {
    setState(e.target.value);
  }
  return [state, handleChange, reset];
}
