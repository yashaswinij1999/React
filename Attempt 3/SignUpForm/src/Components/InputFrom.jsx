import React, { useState } from "react";

function InputFrom({ addValue }) {
  const [inputVal, setInputValue] = useState({ product: "", qty: 1 });
  const [isProductValid, setProductValid] = useState(false);

  const validate = (product) => {
    if (product.length === 0) {
      setProductValid(false);
    } else {
      setProductValid(true);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "product") {
      validate(value);
    }
    setInputValue({ ...inputVal, [name]: value });
  }

  function handleSubmit() {
    addValue(inputVal);
    setInputValue({ product: "", qty: "1" });
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
      <span style={{ color: "red" }}>{!isProductValid && "*required"}</span>
      {"  "}
      Qty :{" "}
      <input
        type="number"
        name="qty"
        value={inputVal.qty}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} disabled={!isProductValid}>
        submit
      </button>
    </>
  );
}

export default InputFrom;
