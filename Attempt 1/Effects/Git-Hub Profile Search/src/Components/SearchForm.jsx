import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import "./SearchForm.css";
import { useState } from "react";

export default function SearchForm({ searchUserName }) {
  const [name, setName] = useState("");

  const handleChange = function (e) {
    setName(e.target.value);
  };

  const handleForm = function (e) {
    e.preventDefault();
    console.log("submitted");
    searchUserName(name);
    setName("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="user name"
            value={name}
            onChange={handleChange}
          />
          <button className="btn">search</button>
        </form>
      </div>
    </>
  );
}
