// src/App.jsx
import React, { useState, FormEvent } from "react";
import TodoList from "./TodoList";
import { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const addTodo = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent the form from reloading the page
    if (task) {
      // Check if the task is not empty
      const newTodo: Todo = { id: Date.now(), text: task };
      setTodos([...todos, newTodo]);
      setTask(""); // Clear input after adding
    }
  };

  const deleteTodo = (id: number): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
