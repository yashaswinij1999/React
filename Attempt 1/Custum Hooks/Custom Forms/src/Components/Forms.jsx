import { useState } from "react";
import useForm from "../Hooks/useForm";

export default function Forms() {
  const [email, setEmail, resetEmail] = useForm("");
  const [password, setPassword, resetPassword] = useForm("");

  return (
    <>
      <p>
        <b>Email :</b> {email} <b>Password :</b> : {password}
      </p>
      <label htmlFor="heading">
        {" "}
        <b>Enter Email: </b>
      </label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={setEmail}
        value={email}
      />
      <button onClick={resetEmail} style={{ margin: "10px" }}>
        Reset email
      </button>
      <label htmlFor="heading">
        {" "}
        <b>Enter Password: </b>
      </label>
      <input
        type="text"
        name="password"
        id="password"
        onChange={setPassword}
        value={password}
      />
      <button onClick={resetPassword} style={{ margin: "10px" }}>
        Reset Password
      </button>
    </>
  );
}
