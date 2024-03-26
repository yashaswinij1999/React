import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoppingCart from "./Components/ShoppingCart";
import ShoppingCartList from "./ShoppingCartList";

const data = [
  { id: 1, items: "eggs", quantity: 12, completed: false },
  { id: 2, items: "milk", quantity: 1, completed: true },
  { id: 3, items: "chicken breasts", quantity: 4, completed: false },
  { id: 4, items: "carrots", quantity: 6, completed: true },
];

function App() {
  return (
    <>
      <ShoppingCartList data={data} />
    </>
  );
}

export default App;
