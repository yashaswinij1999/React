import { useState } from "react";

function useForm(initialValue) {
  const [data, setData] = useState(initialValue);

  function handleChange(e) {
    setData(e.target.value);
  }

  function reset() {
    setData(initialValue);
  }

  return [data, handleChange, reset];
}

export default useForm;
