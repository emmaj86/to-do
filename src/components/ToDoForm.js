import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

//form to add todo
const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== "") {
      //initiates new todo
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      //adds newtodo
      addTodo(newTodo);
      setTodoText("");
    }
  };
  //add todo form
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);
