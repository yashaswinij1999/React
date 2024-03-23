import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingCart(props) {
  const { data } = props;
  return (
    <>
      <ul>
        {data.map((el) => (
          <ShoppingListItem
            item={el.items}
            quantity={el.quantity}
            completed={el.completed}
          />
        ))}
      </ul>
    </>
  );
}
