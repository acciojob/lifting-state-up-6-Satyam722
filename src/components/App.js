import React, { useState } from 'react';
import TodoList from './TodoList';
import './../styles/App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false }
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div id="main">
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default App;
