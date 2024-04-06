import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ShoppingListForm from "./Components/ShoppingListForm";
import ShoppingCartList from "./Components/ShoppingCartList";

function App() {
  return (
    <>
      <ShoppingCartList />
    </>
  );
}

export default App;
