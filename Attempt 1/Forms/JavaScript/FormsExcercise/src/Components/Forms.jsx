import { useRef, useState } from "react";

export default function Forms() {
  const intialState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
  };

  const [formData, setFormData] = useState(intialState);
  const inputRef = useRef(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    const validateFields = validate(formData);
    if (Object.keys(validateFields).length > 0) {
      setErrors(validateFields);
      console.log(validateFields);
      return;
    }

    console.log("submitted");
    resetFields();
    inputRef.current.focus();
    alert(" You have succesfully completed 😄 ");
  };

  const resetFields = () => {
    setFormData(intialState);
    setErrors({});
  };

  function validate(data) {
    const errors = {};
    for (const key in data) {
      if (data[key].trim() === "") {
        errors[key] = " * required ";
      }
    }
    return errors;
  }

  return (
    <>
      <h1>Forms</h1>

      <form onSubmit={handleFormSubmission}>
        <label htmlFor="fname">
          <b>First Name - </b>
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="fname"
          id="fname"
          value={formData.fname}
          ref={inputRef}
        />
        {errors.fname && <span style={{ color: "red" }}>{errors.fname}</span>}
        <br />

        <label htmlFor="lname">
          <b>Last Name - </b>
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="lname"
          id="lname"
          value={formData.lname}
        />
        {errors.lname && <span style={{ color: "red" }}>{errors.lname}</span>}
        <br />

        <label htmlFor="email">
          <b>Email - </b>
        </label>
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          id="email"
          value={formData.email}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <br />

        <label htmlFor="password">
          <b> Password - </b>
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="password"
          id="password"
          value={formData.password}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
        <br />

        <b> Gender - </b>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="select"> Select </option>
          <option value="male"> Male </option>
          <option value="female "> Female </option>
        </select>
        {errors.gender && <span style={{ color: "red" }}>{errors.gender}</span>}
        <br />

        <button style={{ margin: "10px" }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
