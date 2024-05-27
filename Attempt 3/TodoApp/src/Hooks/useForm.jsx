import React, { useState } from "react";

function useForm({ initialState }) {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    preventDefault(e);
    setState(e.target.value);
    reset();
  }

  function reset() {
    setState("");
  }

  return [state, handleChange, reset];
}

export default useForm;
