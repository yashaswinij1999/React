export default function ShoppingCartList({ data }) {
  return (
    <>
      {data.map((el) => (
        <ul key={el.id}>
          <li>
            {el.product} {el.qty}
          </li>
        </ul>
      ))}
    </>
  );
}
