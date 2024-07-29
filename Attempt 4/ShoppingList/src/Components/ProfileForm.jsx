import { useState } from "react";

function ProfileForm({ searchName }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchName(name);
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="uname"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" style={{ margin: "10px" }}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfileForm;
