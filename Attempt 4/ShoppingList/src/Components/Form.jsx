import { useState } from "react";

function Form({ addData }) {
  const [data, setData] = useState({ item: "", qty: 0 });
  const [isValidProduct, setValidProduct] = useState(false);

  function handleChange(e) {
    if (e.target.name === "item") {
      validate(e.target.value);
    }
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    console.log("submitted");
    e.preventDefault();
    addData(data);
    setData({ item: "", qty: 0 });
    setValidProduct(false);
  }

  function validate(val) {
    if (val.length === 0) {
      setValidProduct(false);
    } else {
      setValidProduct(true);
    }
  }

  return (
    <>
      <h1>Shopping List</h1>
      <div style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          Product :{" "}
          <input
            type="text"
            name="item"
            value={data.item}
            onChange={handleChange}
          />
          {!isValidProduct && <span style={{ color: "red" }}>required</span>}
          Qty:{" "}
          <input
            type="number"
            name="qty"
            value={data.qty}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;
