import { useRef, useState } from "react";
import { validate } from "uuid";

export default function ShoppingListForm({ addItem }) {
  const initialValues = [
    {
      product: "",
      qty: 0,
    },
  ];

  const [data, setData] = useState(initialValues);
  const inputRef = useRef(null);
  const [isvalidproduct, setProduct] = useState(false);

  const handleChange = function (e) {
    if (e.target.name === "product") {
      validate(e.target.value);
    }

    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmission = function (e) {
    e.preventDefault();
    console.log("submitted");
    addItem(data);
    reset();
    inputRef.current.focus();
  };

  const validate = (product) => {
    if (product.length === 0) {
      setProduct(false);
    } else {
      setProduct(true);
    }
  };

  function reset() {
    setData({ product: "", qty: 0 });
    setProduct(false);
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <form onSubmit={handleSubmission}>
        <label htmlFor="product">
          <b>Product : </b>
        </label>
        <input
          id="product"
          name="product"
          type="text"
          value={data.product}
          onChange={handleChange}
          ref={inputRef}
        />
        {!isvalidproduct && <span style={{ color: "red" }}> required </span>}
        <label htmlFor="qty">
          {" "}
          <b> Quantity :</b>{" "}
        </label>
        <input
          id="qty"
          name="qty"
          type="number"
          value={data.qty}
          onChange={handleChange}
        />
        <button type="submit" disabled={!isvalidproduct}>
          Submit
        </button>
      </form>
    </>
  );
}
