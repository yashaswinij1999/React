import RentalProperty from "./RentalProperty";

function RentalPropertyList({ properties }) {
  return (
    <>
      <div style={{ display: "flex", border: "1px solid" }}>
        {properties.map((el) => (
          <RentalProperty
            key={el.id}
            name={el.name}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </>
  );
}

export default RentalPropertyList;
