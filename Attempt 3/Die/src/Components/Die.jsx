function Die() {
  const random = Math.floor(Math.random() * 6 + 1);

  return (
    <div
      style={{
        fontSize: "30px",
        color: "red",
        border: "1px solid",
        width: "50px",
        borderRadius: "10px",
        margin: "2px",
      }}
    >
      {random}
    </div>
  );
}

export default Die;
