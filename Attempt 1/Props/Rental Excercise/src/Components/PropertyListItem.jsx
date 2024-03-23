import React from "react";
import "./PropertyListItem.css";

function PropertyListItem(props) {
  const { name, rating, price } = props;
  return (
    <>
      <div className="head">
        <h1>{name}</h1>
        <h2>${price} a night</h2>
        <h4>
          {rating}
          {"\u2B50"}
        </h4>
      </div>
    </>
  );
}

export default PropertyListItem;
