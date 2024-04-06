import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingCartList() {
  const data = [
    { id: uuidv4(), product: "Banana", qty: 5 },
    { id: uuidv4(), product: "Eggs", qty: 12 },
  ];

  const [oldData, setData] = useState(data);

  function addItem(item) {
    setData((currentData) => {
      return [...currentData, { ...item, id: uuidv4() }];
    });
  }

  return (
    <>
      <ShoppingListForm addItem={addItem} />
      <ul>
        {oldData.map((el) => (
          <li key={el.id}>
            <b>
              {el.product} - {el.qty}
            </b>
          </li>
        ))}
      </ul>
    </>
  );
}
