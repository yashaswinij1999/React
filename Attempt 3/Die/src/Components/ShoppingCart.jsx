import ShoppingList from "./ShoppingList";

const list = [
  { id: 1, item: " buy eggs ", completed: true, qty: 12 },
  { id: 2, item: " breast chicken ", completed: false, qty: 2 },
  { id: 3, item: "  milk  ", completed: false, qty: 1 },
  { id: 4, item: "  carrots  ", completed: true, qty: 2 },
];

function ShoppingCart() {
  return (
    <div>
      {list.map((el) => (
        <ShoppingList
          key={el.id}
          id={el.id}
          item={el.item}
          completed={el.completed}
          qty={el.qty}
        />
      ))}
    </div>
  );
}

export default ShoppingCart;
