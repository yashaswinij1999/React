import React, { CSSProperties, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const layout: CSSProperties = {
  width: "100%",
  height: "100%",
};

const header: CSSProperties = {
  color: "white",
  backgroundColor: "none",
  fontSize: "24px",
};

const content: CSSProperties = {
  width: "50%",
  margin: "auto",
};

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const intialTodos: Todo[] = [
  { id: "1001", title: "Todo 1", isCompleted: true },
  { id: "1002", title: "Todo 2", isCompleted: false },
];

const TodoApp: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>(intialTodos);

  const addTodo = (title: string): void => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };

    setTodo([...todos, newTodo]);
  };

  const toggleTodo = (id: string): void => {
    const upDatedTodos = todos.map((el) => {
      if (el.id === id) {
        return { ...el, isCompleted: !el.isCompleted };
      }
      return { ...el };
    });
    setTodo(upDatedTodos);
  };

  const editTodo = (id: string, title: string): void => {
    const editTodo = todos.map((el) => {
      if (el.id === id) {
        return { ...el, title };
      } else {
        return { ...el };
      }
    });
    setTodo(editTodo);
  };

  const deleteTodo = (id: string): void => {
    const delTodos = todos.filter((el) => {
      if (el.id !== id) {
        return { ...el };
      }
    });
    setTodo(delTodos);
  };

  return (
    <>
      <Layout style={layout}>
        <Header style={header}> Todo V1</Header>
        <Content style={content}></Content>
      </Layout>
    </>
  );
};

export default TodoApp;
