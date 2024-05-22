import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to Home Page</h1>;
      <button onClick={() => navigate("orderSummary", { replace: true })}>
        Submit
      </button>
    </>
  );
}

export default Home;
