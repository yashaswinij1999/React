# Toggler

---

The Toggler component is a simple React component that demonstrates toggling between different states using custom hooks.

## Objective

The Main objective of this excercise is to create statefull component using **useState** Hook and also to implement custumazible hook.

## Usage

The Toggler component displays emoji icons that can be toggled between happy (😄) and sad (😢) faces, as well as between female (👧) and male (👦) gender icons. Clicking on the displayed icons will toggle their state.

### Props

- isHappy : Boolean state representing the current emotional state (happy or sad).
- gender : Boolean state representing the current gender (female or male).

### Steps

**React Setup**

- Create a Project in a directory using the preferred method (using vite).
- Remove unnecessary code in `App.jsx`.

**Create Component**

- Create a component named `Toggler` in a `src` directory.
- Export the component, so that we can import and render it in App.jsx.

**Import useState**

- import the _useState_ hook, to store the state.
- Implement a function to modify the state, finally render it.

**useToggle Hook**

- The useToggle custom hook is used to manage boolean state toggles within components. It simplifies the process of toggling state values.

**Styling**

- Style the component with using css properties.
