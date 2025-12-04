import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      {todos.map(todo => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px"
          }}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              flex: 1
            }}
          >
            {todo.text}
          </span>

          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              style={{
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Complete
            </button>
          )}

          {todo.completed && <span style={{ color: "green" }}>✔ Completed</span>}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
