import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingList from "./Components/ShoppingList";

function App() {
  const data = [
    { id: 1, item: "eggs", qty: 12, purchased: false },
    { id: 2, item: "milk", qty: 1, purchased: true },
    { id: 3, item: "chicken breasts", qty: 4, purchased: false },
    { id: 4, item: "carrots", qty: 6, purchased: true },
  ];

  return (
    <>
      <div className="bg-blue-100 min-h-screen flex justify-center items-center">
        <ShoppingList data={data} />
      </div>
    </>
  );
}

export default App;
