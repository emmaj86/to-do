import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./components/reducer";
import TodoList from "./components/ToDoList";
import TodoForm from "./components/ToDoForm";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>To-Do Application</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
