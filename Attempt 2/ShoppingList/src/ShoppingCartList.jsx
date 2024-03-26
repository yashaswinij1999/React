import React from "react";
import ShoppingCart from "./Components/ShoppingCart";

function ShoppingCartList({ data }) {
  return (
    <>
      {data.map((el) => (
        <ShoppingCart
          key={el.id}
          items={el.items}
          quantity={el.quantity}
          completed={el.completed}
        />
      ))}
    </>
  );
}

export default ShoppingCartList;
