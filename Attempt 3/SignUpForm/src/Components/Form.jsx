import React, { useState } from "react";

function Form() {
  const [inputVal, setInputVal] = useState({ product: "", qty: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    const newData = { ...inputVal, [name]: value };
    setInputVal(newData);
  }

  return (
    <>
      <p>
        Product : {inputVal.product} and Quantity : {inputVal.qty}
      </p>
      Product :{" "}
      <input
        type="text"
        value={inputVal.product}
        onChange={handleChange}
        name="product"
      />
      <div></div>
      Quantity :{" "}
      <input
        type="text"
        onChange={handleChange}
        value={inputVal.qty}
        name="qty"
      />
    </>
  );
}

export default Form;
