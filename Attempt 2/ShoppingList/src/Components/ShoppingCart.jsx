import React from "react";

export default function ShoppingCart(props) {
  const { id, items, quantity, completed } = props;

  const style = {
    textDecorationLine: completed ? "line-through" : "null",
    color: completed ? "green" : "red",
  };

  return (
    <>
      <ul>
        <li style={style} key={id}>
          {items} - {quantity}
        </li>
      </ul>
    </>
  );
}
