import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Section from "./Components/Section";
import Heading from "./Heading";

function App() {
  return (
    <>
      <Section level={1}>
        <Heading title={"Rama"} />
        <Heading title={"Sita"} />
        <Section level={2}>
          <Heading title={"Lava"} />
          <Heading title={"Kusha"} />
        </Section>
      </Section>
    </>
  );
}

export default App;
