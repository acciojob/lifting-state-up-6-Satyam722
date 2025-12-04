import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div className="todo-list">
      <h2>Todo Items (Child Component)</h2>
      
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li 
              key={todo.id} 
              className={todo.completed ? 'completed' : 'pending'}
            >
              <span className="todo-text">{todo.text}</span>
              
              {!todo.completed && (
                <button
                  className="complete-btn"
                  onClick={() => handleComplete(todo.id)}
                >
                  Mark Complete
                </button>
              )}
              
              {todo.completed && (
                <span className="status">✓ Completed</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
