import React, { useState } from "react";

function SearchForm({ searchUser }) {
  const [inval, setVal] = useState("");

  function handleChange(e) {
    setVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    searchUser(inval);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="uname"
          value={inval}
          placeholder="username"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </>
  );
}

export default SearchForm;
