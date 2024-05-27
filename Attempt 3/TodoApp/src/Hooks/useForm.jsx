import React, { useState } from "react";

function useForm() {
  const [inval, setInval] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "Add",
      payload: { id: uuidv4(), task: inval, completed: false },
    });
    reset();
    inRef.current.focus();
  }

  function reset() {
    setInval("");
  }

  return <div>useForm</div>;
}

export default useForm;
