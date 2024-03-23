# ScoreKeeper Game

---

## Objective

The main Objective is to modify the state using the _Use State_ hook.

### Steps

1. **React Setup**

   - Create the Project in the directory using preferred method (Eg : Using Vite).
   - Delete unrelated code in `App.jsx` file.

2. **Create Component**

   - Best practice is to create component folder in `src` directory and then create component file and then export it.
   - Test the component file in `App.jsx` by importing it.

3. **Import UseState**

   - Import UseState from React and modify the state.

4. **Logic**

   - Iterate over the array to display the value.
   - Add button to each element, and when clicked it should increment the score by one.
   - whichever element hits the target, should display message as `Winner'.

5. **Reset Button**
   - add button with name called `Reset` when clicked, the state should change to intial value.
