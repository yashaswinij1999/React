# LuckyGame

---

The main objective is to structure the applications using state,props, components, import and exports and combine them to build something slightly larger application.

Its a dice game, we have 2 dices , two dice we roll , each one is just a six sided die , we render each die and dice are kept in state.

## Goals

- Understand the stratergies for _component decomposition_.
- Practice desigining a React App!.
- Learn to how pass functions between components.

### Requirements

---

- Play a dice game with numdDice number of dice.
- Shows a win message when total equals to goal.
- A 'roll again' button that re-rolls all the dice.

### Steps

---

1.  **React Setup**

    - Set up a React project in a directory using your preferred method (e.g., using Vite).
    - Remove unnecessary code from your project.

2.  **Create a die Component**

    - Create a JSX file named `Die.jsx` under the components directory in the `src` folder.
    - Render a value that is recieved as a prop from `Dice` component.

3.  **Create Dice Component**

    - Create a `Dice.jsx` component file under components directory.
    - Loop over the array that is passed as prop from `LuckyN` component.
    - Render the each element as a prop to `Die` component.

4.  **Create Luckyn Component**

    - create a `Luckyn` component in components directory.
    - props are numDice and target.
    - Import Usestate to intialise the state.

5.  **Logic**

    - Initialize the state for dice using useState, where dice is a state variable set to the result of getRoll(numDice).

    ```
    const [dice,setDice] = useState(getRoll(numDice))
    ```

    - Define a function getRoll(numDice) that returns a new array based on the length specified by numDice, with elements representing randomly generated values.

    - Implement a sum function to calculate the total value of all dice using the reduce method.
    - Create a variable isWinner to check if the sum equals the target value.
    - If isWinner is true, display a popup message declaring the player as the winner.

6.  **CSS properties**
    - Apply CSS properties to style the components for presentation.
