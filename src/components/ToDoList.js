import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo, completeTodo } from "./actions";

const TodoList = ({ todos, deleteTodo, editTodo, completeTodo }) => {
  //deleted todo by id
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id, text) => {
    //edits todo by id
    const updatedTodo = prompt("Edit the task:", text);
    if (updatedTodo) {
      editTodo(id, { id, text: updatedTodo, completed: false });
    }
  };

  const handleComplete = (id) => {
    //sets todo as complete true
    completeTodo(id);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {/*onclick events for buttons*/}
          <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Completed</button>
          )}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  deleteTodo,
  editTodo,
  completeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
