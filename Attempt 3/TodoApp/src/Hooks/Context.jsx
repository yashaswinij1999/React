import { createContext, useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          completed: action.payload.completed,
        },
      ];

    case "delete":
      return state.filter((el) => action.payload.id !== el.id);

    case "edit":
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, task: action.payload.task } : el
      );

    default:
      return state;
  }
};

const initialData = [
  { id: 1, task: "buy milk", completed: true },
  { id: 2, task: "study food", completed: false },
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
