import React, { useState } from "react";

function InputFrom({ addValue }) {
  const [inputVal, setInputValue] = useState({ product: "", qty: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputVal, [name]: value });
  }

  function handleSubmit() {
    addValue(inputVal);
    validateForm();
    setInputValue({ product: "", qty: "" });
  }

  return (
    <>
      Product :{" "}
      <input
        type="text"
        name="product"
        value={inputVal.product}
        onChange={handleChange}
      />
      Qty :{" "}
      <input
        type="number"
        name="qty"
        value={inputVal.qty}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

export default InputFrom;
