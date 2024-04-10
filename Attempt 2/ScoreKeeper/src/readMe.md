# ScoreKeeper Excercise

---

## Description

This project is a basic React application that allows users to manage scores for multiple players. It includes features such as adding players, incrementing scores, and resetting scores to zero.

## Objective

The main objective of the project, is to get more hands on implementing state and working on props.

### Technologies Used

- React: A JavaScript library for building user interfaces.
- CSS: Styling for the application components.
- JavaScript (ES6+): Modern JavaScript syntax for React development.

### Steps

1. **React Setup:**

   - Create a Project in a project directory using preferred method(using vite).
   - Steps to create a project.

     ```
     1. npm create vitelatest.
     2. npm install
     3. npm run dev
     ```

   - Remove unneccesary code in `App.jsx`.

2. **Create Component**

   - Create a required component in the `Component` directory.
   - Export the component, to render to it in App.jsx file.

3. **Import UseState**

   - Import use state from react to modify the state.

4. **Rendering**

   - Create a new Array based on length recieved as prop from App.jsx and fill all values with zero .
   - Render values of array in list along with button.
   - Add event listener to the button, once the button is clicked score should increment to one.
   - If the element value is equal to target, display `winner` message.
   - Create a Reset button, when clicked the scores to set to their intial values.
