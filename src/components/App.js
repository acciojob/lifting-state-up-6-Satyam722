import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Practice Lifting State Up", completed: false },
    { id: 3, task: "Build Todo App", completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
