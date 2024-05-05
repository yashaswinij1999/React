import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RentalProperty from "./Components/RentalProperty";

function App() {
  const properties = [
    { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
    { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
    { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
    { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
    { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
    { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
  ];

  return (
    <>
      <div className="bg-yellow-100 flex justify-center items-center min-h-screen">
        {properties.map((el) => (
          <RentalProperty
            id={el.id}
            name={el.name}
            rating={el.rating}
            price={el.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
