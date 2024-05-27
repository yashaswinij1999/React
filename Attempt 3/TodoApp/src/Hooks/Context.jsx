import { createContext, useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, { id: action.payload.id, task: action.payload.task }];
    default:
      return state;
  }
};

const initialData = [
  { id: 1, task: "buy milk" },
  { id: 2, task: "study food" },
];

export const stateContext = createContext();

export function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <stateContext.Provider value={{ state, dispatch }}>
        {children}
      </stateContext.Provider>
    </>
  );
}
