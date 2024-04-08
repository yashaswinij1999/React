import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import "./SearchForm.css";
import { useState } from "react";

export default function SearchForm() {
  const [name, setName] = useState(" ");

  const handleChange = function (e) {
    console.log(e.target.value);
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="user name"
          name="uname"
          value={name}
          onChange={handleChange}
        />
        <Button
          className="btn"
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
        />
      </div>
    </>
  );
}
