import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        {
          id: action.payload.id,
          image: action.payload.image,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        },
      ];
    default:
      return state;
  }
};

export const shopContext = createContext();

export default function ShoppingContext({ children }) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <shopContext.Provider value={{ state, dispatch }}>
        {children}
      </shopContext.Provider>
    </>
  );
}
