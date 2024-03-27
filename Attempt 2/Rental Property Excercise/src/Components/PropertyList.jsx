import React from "react";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <>
      <div className="list">
        {properties.map((el) => (
          <Property
            id={el.id}
            name={el.name}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
      ;
    </>
  );
}

export default PropertyList;
