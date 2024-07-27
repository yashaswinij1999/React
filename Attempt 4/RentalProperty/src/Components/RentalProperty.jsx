function RentalProperty({ name, rating, price }) {
  return (
    <div
      style={{
        margin: "10px",
        textAlign: "center",
      }}
    >
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h3>{rating} ⭐</h3>
    </div>
  );
}

export default RentalProperty;
