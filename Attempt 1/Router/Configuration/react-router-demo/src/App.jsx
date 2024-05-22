import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Product from "./Components/Product";
import Featured from "./Components/Featured";
import New from "./Components/New";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import AdminDetails from "./AdminDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="orderSummary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="product" element={<Product />}>
          <Route index="featured" element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<AdminDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
