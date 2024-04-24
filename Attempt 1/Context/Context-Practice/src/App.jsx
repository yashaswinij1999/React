import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Section from "./Components/Section";
import Heading from "./Heading";
import C from "./Components/C";
import React from "react";

export const UserContext = React.createContext();
export const ChannelContent = React.createContext();

function App() {
  return (
    <>
      {/* <Section level={1}>
        <Heading title={"Rama"} />
        <Heading title={"Sita"} />
        <Section level={2}>
          <Heading title={"Lava"} />
          <Heading title={"Kusha"} />
        </Section>
      </Section> */}
      <UserContext.Provider value={"rama"}>
        <ChannelContent.Provider value={"Code Evoultion"}>
          <C />
        </ChannelContent.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
