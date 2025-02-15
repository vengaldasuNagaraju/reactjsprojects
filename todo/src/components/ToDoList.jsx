import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { text, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
  };

  return (
    <>
      <h1>Todos</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter your Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
      </form>
      <ul className="todos">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? "completed" : ""}
            onClick={() => toggleTodo(index)}
            onContextMenu={(e) => {
              e.preventDefault();
              deleteTodo(index);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <small>
        Left click to toggle completed.<br /> Right click to delete
      </small>
    </>
  );
};

export default ToDoList;
