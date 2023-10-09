import { configureStore } from "@reduxjs/toolkit";
import { addTodos } from "./reducer";

//stores todos
const store = configureStore({
  reducer: addTodos,
});

export default store;
