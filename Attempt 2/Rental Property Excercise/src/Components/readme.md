# Airbnb Vacation Rental Property List

---

This repository contains a React application featuring a PropertyList component designed to display a list of vacation rental properties in a user-friendly format.

### Functionality Overview:

- The PropertyList component is responsible for rendering a list of properties based on the provided data.
- Each property is represented by a Property component, which displays the property name, price per night, and rating.
- The price is formatted with a dollar sign and displayed with the corresponding nightly rate.
- The rating is displayed with star emojis to denote the property's rating.

### Usage

To use the PropertyList component, simply pass an array of property objects as the properties prop to the Property component. Each property object should contain the following properties:

- **id :** A unique identifier for the property.
- **name :** The name or title of the property.
- **price:** The nightly rate of the property.
- **rating:** The rating of the property, represented as a number (e.g., 4.5 out of 5).

_Example data_

```
const properties = [
  { id: 1, name: "Cozy Cottage", price: 150, rating: 4.7 },
  { id: 2, name: "Luxury Villa", price: 300, rating: 4.9 },
  { id: 3, name: "Beachfront Bungalow", price: 200, rating: 4.5 },
  // Add more property objects as needed
];
```

### Components

- The PropertyList component renders the list of properties based on the provided data.
- Each property is displayed using the Property component, which formats and presents the property details.

**Style**

- The PropertyList component uses Flexbox to ensure that properties are displayed in a row for easy viewing.
- Property component uses flex to align all items.
