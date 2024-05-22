import React from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <>
      <p>User 1</p>
      <p>User 2</p>
      <p>User 3</p>
      <Link to={"userId"}>UserId</Link>
      {"    "} <Link to={"admin"}> Admin </Link>
      <Outlet />
    </>
  );
}

export default Users;
