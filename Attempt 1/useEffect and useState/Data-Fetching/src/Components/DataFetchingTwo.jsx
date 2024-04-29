import axios from "axios";

import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = function (state, action) {
  switch (action.type) {
    case "FETCH_SUCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        loading: true,
        error: "something went wrong",
        post: {},
      };
  }
};

export default function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);

  return (
    <>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </>
  );
}
