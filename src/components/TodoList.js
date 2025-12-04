import React from 'react';

const TodoList = (props) => {
  const { todos, handleComplete } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="list">
          {todo.text}
          {todo.completed ? (
            <span> [Complete]</span>
          ) : (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
