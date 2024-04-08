import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import ProfileSearch from "./Components/ProfileSearch";

function App() {
  return (
    <>
      <ProfileSearch />
      <SearchForm />
    </>
  );
}

export default App;
