import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          completed: action.payload.completed,
        },
      ];
    case "toggle":
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, completed: !el.completed } : el
      );

    case "delete":
      return state.filter((el) => el.id !== action.payload.id);
  }
};

function Form() {
  const [val, setVal] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  console.log(val);

  function add() {
    dispatch({
      type: "add",
      payload: { id: Date.now(), task: val, completed: false },
    });
    setVal("");
  }

  function toggle(id) {
    dispatch({ type: "toggle", payload: { id: id } });
  }

  function removeTodo(id) {
    dispatch({ type: "delete", payload: { id: id } });
  }

  return (
    <div>
      Task :{" "}
      <input
        type="text"
        name="val"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => add()}>Submit</button>
      {state.map((el) => (
        <li key={el.index} style={{ color: el.completed ? "green" : "red" }}>
          {el.task} <button onClick={() => toggle(el.id)}>toggle</button>{" "}
          <button onClick={() => removeTodo(el.id)}>delete</button>
        </li>
      ))}
    </div>
  );
}

export default Form;
