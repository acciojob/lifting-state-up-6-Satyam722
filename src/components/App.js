import React, { useState } from "react";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
    
  ]);

  const handleComplete = (id) => {
    // Update todo as completed
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default TodoApp;
