function ShoppingList({ list }) {
  return (
    <div>
      {list.map((el) => (
        <li key={el.id}>
          {el.item} - {el.qty}
        </li>
      ))}
    </div>
  );
}

export default ShoppingList;
