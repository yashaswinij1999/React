import "./PropertyList.css";
import PropertyListItem from "./PropertyListItem";

export default function PropertyList(props) {
  const { properties } = props;
  return (
    <div className="PropertyList">
      {properties.map((el) => (
        <PropertyListItem
          key={el.id}
          name={el.name}
          rating={el.rating}
          price={el.price}
        />
      ))}
    </div>
  );
}
