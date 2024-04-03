import { useRef, useState } from "react";

export default function FormSignUp() {
  const [formData, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const inputRef = useRef(null);

  function changeValue(e) {
    const { name, value } = e.target;
    const newForm = { ...formData, [name]: value };
    setForm(newForm);
    setErrors({ ...errors, [name]: "" });
  }

  function handleSubmission(e) {
    e.preventDefault();

    const validateForm = validate(formData);

    if (Object.keys(validateForm).length > 0) {
      setErrors(validateForm);
      return;
    }

    console.log("form submitted successfully");
    reset();
    inputRef.current.focus();
  }

  function validate(data) {
    const errors = [];

    for (let key in data) {
      if (data[key] === "") {
        errors[key] = " *required ";
      }
    }
    return errors;
  }

  function reset() {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmission}>
        <div>
          <label htmlFor="firstName">First Name : </label>
          <input
            ref={inputRef}
            type="firstName"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={changeValue}
          />
          {errors.firstName && (
            <span style={{ color: "red" }}>{errors.firstName}</span>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name : </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={changeValue}
          />
          {errors.lastName && (
            <span style={{ color: "red" }}>{errors.lastName}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeValue}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">PassWord : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={changeValue}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
