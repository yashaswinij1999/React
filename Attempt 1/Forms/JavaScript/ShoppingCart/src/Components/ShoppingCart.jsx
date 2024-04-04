import { useState } from "react";
import ShoppingCartList from "./ShoppingCartList";
import { v4 as uuidv4 } from "uuid";

export default function ShoppingCart() {
  const initialValues = [
    {
      id: 0,
      product: "",
      qty: 0,
    },
  ];

  const [data, setData] = useState(initialValues);

  const handleChange = function (e) {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    const newData = [{ ...data, [name]: value, id: uuidv4() }];
    setData(newData);
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <form>
        <label htmlFor="product">
          <b>Product : </b>
        </label>
        <input
          id="product"
          name="product"
          type="text"
          value={data.product}
          onChange={handleChange}
        />
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
        <button>Submit</button>
      </form>
    </>
  );
}
