# Shopping Cart Excercise

---

This repository contains a simple React application demonstrating the creation of a shopping list component. The component is designed to display a list of items along with their quantities and purchase status.

### Functionality Overview:

- The shopping list component accepts an array of objects representing shopping items. Each object includes properties
  for the item name, quantity, and completion status.
- The list items are rendered dynamically based on the provided data, with completed items displayed in a strikethrough
- style and green color.
- Items that are yet to be purchased are displayed in red color for easy identification.

### Usage

To use the shopping list component, simply pass an array of item objects as the items prop to the ShoppingList component. Each item object should contain the following properties:

- **item:** The name of the item.
- **quantity :** The quantity of the item.
- **completed:** A boolean indicating whether the item has been purchased/completed (true) or not (false).

_Example data_

```
const data = [
  { item: "Eggs", quantity: 12, completed: true },
  { item: "Milk", quantity: 1, completed: true },
  { item: "Chicken Breasts", quantity: 4, completed: false },
  { item: "Carrots", quantity: 6, completed: true }
];
```

### Components

The ShoppingList component is responsible for rendering the shopping list based on the provided data. Each list item is displayed with appropriate styling to indicate its purchase status.

**Styling**

- Completed items are styled with a green color and a strikethrough text decoration.
- items yet to be purchased are styled with a red color.
