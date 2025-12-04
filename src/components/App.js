import React, { useState } from 'react';
import TodoList from './TodoList';
import './../styles/App.css';

function App() {
  // Initial todos state
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy the React app', completed: false },
    { id: 4, text: 'Master React Hooks', completed: true },
    { id: 5, text: 'Learn Redux', completed: false }
  ]);

  // Handler function to mark todo as complete
  const handleComplete = (id) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div id="main">
      <h1>Todo List Application</h1>
      <p>Parent Component - Manages todos state</p>
      
      <TodoList 
        todos={todos} 
        handleComplete={handleComplete} 
      />

      <div className="stats">
        <p>Total Todos: {todos.length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>
        <p>Pending: {todos.filter(t => !t.completed).length}</p>
      </div>
    </div>
  );
}

export default App;
