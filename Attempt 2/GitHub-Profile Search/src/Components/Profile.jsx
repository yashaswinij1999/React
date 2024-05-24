import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState("Colt");
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, [user]);

  async function getData() {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const searchUser = function (user) {
    setUser(user);
  };

  const src = `${data.avatar_url}`;

  return (
    <>
      <SearchForm searchUser={searchUser} />
      <img src={src} style={{ width: "300px" }} />
      <h3>{user}</h3>
    </>
  );
}

export default Profile;
