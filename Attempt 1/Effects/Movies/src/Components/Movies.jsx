import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Movies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  const handleChange = function (e) {
    setNumber(e.target.value);
  };

  useEffect(() => {
    async function getAPI() {
      const response = await axios.get(`https://swapi.dev/api/films/${number}`);
      setMovie(response.data.title);
    }
    getAPI();
  }, [number]);

  return (
    <>
      <h1>Pick a Number</h1>
      <h3>You choose : {number}</h3>
      <p>
        <b>{movie}</b>
      </p>
      <select id="number" value={number} onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
    </>
  );
}
