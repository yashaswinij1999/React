import React from "react";

function RentalProperty({ id, name, rating, price }) {
  return (
    <>
      <div className="flex">
        <div className="text-center bg-blue-50 p-4">
          <div className="text-lg font-bold p-2">{name}</div>
          <div className="text-base p-2 font-bold">${rating} a night</div>
          <div className="p-2 text-sm font-bold">{price}⭐</div>
        </div>
      </div>
    </>
  );
}

export default RentalProperty;
