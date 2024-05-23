import React, { useState } from "react";
import InputFrom from "./InputFrom";

function List() {
  const [data, setData] = useState([{ product: "eggs", qty: 12 }]);

  function addValue(val) {
    const newData = [...data, { product: val.product, qty: val.qty }];
    console.log(newData);
    setData(newData);
  }

  return (
    <>
      <InputFrom addValue={addValue} />
      {data.map((el, index) => (``
        <li key={index}>
          {el.product} - {el.qty}
        </li>
      ))}
    </>
  );
}

export default List;
