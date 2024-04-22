// src/TodoItem.jsx
import React, { FC } from "react";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
