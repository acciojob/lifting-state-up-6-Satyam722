import React from 'react';

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="list">
          {todo.text}
          {todo.completed ? (
            <span> [Complete]</span>
          ) : (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
