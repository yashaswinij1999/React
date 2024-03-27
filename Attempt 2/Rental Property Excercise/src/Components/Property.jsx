import React from "react";
import "./Property.css";

function Property(props) {
  const { name, rating, price } = props;

  return (
    <>
      <span className="items">
        <h2>{name}</h2>
        <h3>${price} a night </h3>
        <h4>{rating} '🌟'</h4>
      </span>
    </>
  );
}

export default Property;
