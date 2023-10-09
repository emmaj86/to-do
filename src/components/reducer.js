import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from "./actions";

//initial state
const initialState = {
  todos: [{ id: 1, text: "Task 1", completed: false }],
};

//reducer switch statement
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //add todo
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      //delete todo
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      //edit todo
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload.updatedTodo : todo
        ),
      };
      //complete todo
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
