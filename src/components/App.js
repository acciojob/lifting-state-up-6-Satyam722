import React, { useState } from "react";
import TodoList from "./TodoList";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a Todo App", completed: false },
  { id: 3, text: "Master Lifting State Up", completed: false }
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  // Handler to mark a todo as completed
  const handleComplete = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List - Lifting State Up</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
