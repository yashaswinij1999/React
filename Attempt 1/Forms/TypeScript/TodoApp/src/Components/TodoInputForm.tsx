import { Form, Input } from "antd";
import React, { useRef, useState } from "react";

type FieldType = {
  todoText?: string;
};

interface TodoInputFormProps {
  addTodo: (title: string) => void;
}

const TodoInputForm: React.FC<TodoInputFormProps> = () => {
  const [TodoInputForm] = Form.useForm();
  const InputRef = useRef(null);
  const [focusInput, setFocusInput] = useState(false);

  return (
    <>
      <Form
        name="todo-input-form"
        style={{
          margin: "10px 0",
        }}
        size="large"
      >
        <Form.Item
          name="todoText"
          style={{ margin: "0" }}
          rules={[
            {
              required: true,
              message: "Please enter a task to clear your mind.",
            },
          ]}
        ></Form.Item>
      </Form>
    </>
  );
};

export default TodoInputForm;
