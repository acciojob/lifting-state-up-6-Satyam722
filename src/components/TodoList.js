import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed ? (
              <button onClick={() => handleComplete(todo.id)}>
                Complete
              </button>
            ) : (
              <span> [Complete]</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
