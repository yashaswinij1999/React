import { Input } from "antd";
import { useState } from "react";

export default function Forms() {
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  };

  const [formData, setFormData] = useState(intialState);

  const App: React.FC = () => <Input placeholder="Basic usage" />;

  return (
    <>
      <form></form>
    </>
  );
}
