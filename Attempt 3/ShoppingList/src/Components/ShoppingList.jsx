import React from "react";

function ShoppingList({ data }) {
  return (
    <>
      <ul>
        {data.map((el) => (
          <li
            key={el.id}
            className={`w-48 border-2 bg-white px-2 my-1 rounded-md font-medium ${
              el.purchased ? "text-gray-400  line-through " : "text-red-500"
            } `}
          >
            {el.item} - {el.qty}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
