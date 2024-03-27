import React from "react";
import "./PropertyList.css";
import Property from "./Property";

function PropertyList({ properties }) {
  return (
    <>
      <div className="list">
        {properties.map((el) => (
          <Property name={el.name} rating={el.rating} price={el.price} />
        ))}
      </div>
    </>
  );
}

export default PropertyList;
