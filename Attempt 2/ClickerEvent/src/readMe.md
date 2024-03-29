# ClickerEvent Excercise

---

The Clicker component is a simple React component designed for practicing props and handling events. It renders a button with customizable text and triggers an alert message when clicked.

## Usage

To use the Clicker component, follow these steps:

1.  **Install Dependencies:**

    - Ensure you have React installed in your project.

2.  **Create Clicker Component:**

    - Create a new file named Clicker.jsx and define the Clicker component as follow:

      ```
      import React from 'react';

      export default function Clicker({ buttonText, message }) {

        const handleClick = () => {
         alert(message);
        };

        return (
          <button onClick={handleClick}>
          {buttonText}
          </button>
        );
      }
      ```

3.  **Usage Example**

    - Use the Clicker component in your application by importing it and passing the required props:

      ```
      import React from 'react';
      import Clicker from './Clicker';

      function App() {
        return (
            <div>
              <Clicker buttonText="Click Me" message="Hi" />
              {/* Uncomment below to test another Clicker */}
              {/* <Clicker buttonText="Do Not Click" message="Please Stop Clicking Me" /> */}
            </div>
            );
        }

        export default App;

      ```

4.  **Props**

    - **buttonText:** Specifies the text to be displayed on the button.
    - **message:** Specifies the message to be alerted when the button is clicked.

5.  **Examples**
    - **Example 1:** Renders a button with the text "Click Me" and alerts "Hi" when clicked.
    - **Example 2:** Renders a button with the text "Do Not Click" and alerts "Please Stop Clicking Me" when clicked.
