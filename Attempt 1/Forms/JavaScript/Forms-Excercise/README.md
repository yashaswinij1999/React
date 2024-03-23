# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

# Forms Excercise

---

## Objectives

The main objective is to implement form using _React_ and use _Use State_ hook to modify the state.

## Steps

---

1. **Setup React**

   - Create a new React project using your preferred method (e.g., vite ).
   - Remove any unnecessary files and code.

2. **Create a new component for form**

   - create a separate folder named component in the `src` folder in order to create functional component called `form.jsx`

3. **Test `Form.js`**

   - Export the `Form.jsx` component.
   - Import the `Form.jsx` file and render it in App.js file.

4. **Set Input Fields and Import UseState Hook**

   - In `Form.js` file add inputs like _first name, last name, email, password, gender_
   - Import UseState Hook, this manages the state of those input fields.

5. **Form Validations**

   - Implement validations for all input fields, ensure the user provides valid inputs.
   - If not show the user appropriate messages.

6. **Handle Form Submission**
   - add submit button to submit the form.
   - add event handler `on submit` to handle form submission.
   - validate all input fields on Form Submission.
   - if all valids are valid, display popup stating form submitted successfully.
   - Reset all Input fields to the intial value.
   - Set the focus to the first input value field after submission.
