function ShoppingList({ id, item, completed, qty }) {
  const style = {
    color: completed ? "grey" : "red",
    textDecorationLine: completed ? "line-through" : "null",
  };

  return (
    <div>
      <li style={style}>
        {item} - {qty}
      </li>
    </div>
  );
}

export default ShoppingList;
