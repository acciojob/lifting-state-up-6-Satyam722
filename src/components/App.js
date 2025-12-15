import React, { useState } from 'react';
import TodoList from './TodoList';

// App is the parent component that manages the state
function App() {
  // 1. Initialize the state with the list of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish React assignment', completed: true },
    { id: 3, text: 'Walk the dog', completed: false },
    { id: 4, text: 'Call the doctor', completed: false },
  ]);

  // 2. Function to update the completion status (Lifting State Up)
  // This function lives in the parent where the state lives.
  const handleComplete = (id) => {
    setTodos(prevTodos => {
      // Map over the previous state to find and update the specific item
      return prevTodos.map(todo => {
        if (todo.id === id) {
          // Return a NEW object for the updated item
          return { ...todo, completed: true };
        }
        // Return original object for all other items
        return todo;
      });
    });
  };

  return (
    <div className="App">
      <h1>Todo List Tracker</h1>
      {/* 3. Pass state (todos) and setter function (handleComplete) down as props */}
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;
