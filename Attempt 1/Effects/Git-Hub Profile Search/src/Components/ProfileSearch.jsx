import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

const url = "https://api.github.com/users";

export default function ProfileSearch() {
  const [userName, setUserName] = useState("colt");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function searchProfile() {
      const response = await axios.get(`${url}/${userName}`);
      setProfile(response.data);
    }
    searchProfile();
  }, [userName]);

  function searchUserName(name) {
    setUserName(name);
  }

  const src = `${profile.avatar_url}`;

  return (
    <>
      <SearchForm searchUserName={searchUserName} />
      <img style={{ width: "300px" }} src={src} />
      <h3>{profile.name}</h3>
    </>
  );
}
