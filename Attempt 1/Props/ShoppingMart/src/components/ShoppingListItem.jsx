export default function ShoppingListItem(props) {
  const { item, quantity, completed } = props;
  const style = {
    color: completed ? "grey" : "red",
    textDecorationLine: completed ? "line-through" : null,
  };

  return (
    <>
      <li style={style}>
        {item} - {quantity}
      </li>
    </>
  );
}
