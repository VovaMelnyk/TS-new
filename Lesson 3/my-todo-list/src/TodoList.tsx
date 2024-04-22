// src/TodoList.jsx
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Todo } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo }) => {
  const todoList = useSelector((state: RootState) => state.todos.todos);
  
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
