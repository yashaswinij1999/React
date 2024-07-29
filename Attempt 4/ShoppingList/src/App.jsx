import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import ShoppingList from "./Components/ShoppingList";

const itemList = [{ id: 1, item: "carrot", qty: 12 }];

function App() {
  const [list, setList] = useState(itemList);

  function addData(newData) {
    setList((oldList) => [
      ...oldList,
      { item: newData.item, qty: newData.qty },
    ]);
  }

  return (
    <>
      <Form addData={addData} />
      <ShoppingList list={list} />
    </>
  );
}

export default App;
