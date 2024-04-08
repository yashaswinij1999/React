import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";

const url = "https://api.github.com/users";

export default function ProfileSearch() {
  const [userName, setUserName] = useState("colt");
  const [profile, setProfile] = useState({ data: null });

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
      <h3>{profile.login}</h3>
      <img style={{ width: "300px" }} src={src} />
    </>
  );
}
