import axios from "axios";
import { useEffect, useState } from "react";
import "./GitHubForm.css";
import ProfileForm from "./ProfileForm";

function GitHubForm() {
  const [name, setName] = useState("colt");
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getUser();
  }, [name]);

  async function getUser() {
    try {
      const resp = await axios.get(`https://api.github.com/users/${name}`);
      console.log(resp.data);
      setProfile(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  function searchName(newName) {
    setName(newName);
  }

  let url = profile.avatar_url;
  console.log(url);

  return (
    <>
      <ProfileForm searchName={searchName} />
      <img src={url} style={{ width: "300px" }} />
      <div>{name}</div>
    </>
  );
}

export default GitHubForm;
