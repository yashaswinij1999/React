import { useRef, useState } from "react";

const intialData = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

function SignUpForm() {
  const [formData, setFormData] = useState(intialData);
  const [error, setError] = useState({});
  const inputRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((oldFormData) => ({ ...oldFormData, [name]: value }));
    setError({ ...error, [name]: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validateData = validate(formData);

    if (Object.keys(validateData).length > 0) {
      setError(validateData);
      console.log(validateData);
      return;
    }
    reset();
    inputRef.current.focus();
  }

  function validate(data) {
    let errors = {};
    for (let key in data) {
      if (data[key] === "") {
        errors[key] = " * required *";
      }
    }
    return errors;
  }

  function reset() {
    setFormData(intialData);
  }

  return (
    <>
      <h1>SignUpForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          First Name :{" "}
          <input
            type="text"
            ref={inputRef}
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
          {error.fname && <span style={{ color: "red" }}>{error.fname}</span>}
        </div>
        <div>
          Last name:
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
          {error.lname && <span style={{ color: "red" }}>{error.lname}</span>}
        </div>
        <div>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>
        <div>
          Password:
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
