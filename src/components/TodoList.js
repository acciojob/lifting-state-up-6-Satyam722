import React from 'react';

// TodoList is the child component that displays the list and handles clicks
function TodoList({ todos, onComplete }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {/* 1. Map over the todos array received from props */}
      {todos.map(todo => (
        <li key={todo.id} style={{ marginBottom: '10px', padding: '5px', borderBottom: '1px solid #eee' }}>
          
          {/* 2. Conditional Rendering for text style */}
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', marginRight: '10px' }}>
            {todo.text}
          </span>
          
          {/* 3. Conditional Rendering for the button */}
          {!todo.completed ? (
            // The button calls the 'onComplete' prop (which is handleComplete in App.js)
            // It passes the specific item's ID to identify which item to update.
            <button 
              onClick={() => onComplete(todo.id)}
              style={{ padding: '5px 10px', cursor: 'pointer' }}
            >
              Complete
            </button>
          ) : (
            // Display a completed status instead of the button
            <span style={{ color: 'green', fontWeight: 'bold' }}>
              ✓ Completed
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
