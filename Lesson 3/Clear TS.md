```tsx
// src/App.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TodoList from './TodoList';
import { Todo } from './types'; // You will create this type definition

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() !== "") {
      const newTodo: Todo = { id: Date.now(), text: task, done: false };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={task}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
```

```tsx
// src/TodoList.tsx
import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from './types';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;

```

```tsx
// src/TodoItem.tsx
import React from 'react';
import { Todo } from './types';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
```

```tsx
// src/types.ts
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
```