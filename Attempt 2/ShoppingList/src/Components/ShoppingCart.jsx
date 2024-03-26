import React from "react";

export default function ShoppingCart(props) {
  const { id, items, quantity, completed } = props;

  return (
    <>
      <ul>
        <li>{items}</li>
      </ul>
    </>
  );
}
