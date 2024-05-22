import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <h1>Product Page</h1>
      <Link to={"featured"}> Featured </Link>
      {"   "}
      <Link to={"new"}> New </Link>
      <Outlet />
    </>
  );
}

export default Product;
