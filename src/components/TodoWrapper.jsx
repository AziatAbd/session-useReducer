import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const initialState = {
  title: "",
  date: "",
  isEdit: false,
  id: 0,
  editTitle: "",
  todos: [],
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "changeTitle":
      return { ...state, title: action.payload };

    case "changeDate":
      return {
        ...state,
        date: action.payload,
      };

    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case "editTodo":
      return {
        ...state,
        todos: state.todos.map((item) => {
          return item.id === action.payload.id
            ? { ...item, title: state.editTitle, isEdit: false }
            : item;
        }),
      };

    case "toggleIsEdit":
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload ? { ...item, isEdit: !item.isEdit } : item
        ),
      };

    case "changeEditTitle":
      return {
        ...state,
        editTitle: action.payload,
      };

    default:
      return state;
  }
};

const TodoWrapper = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const deleteTodoHandler = (id) => {
    dispatch({ type: "deleteTodo", payload: id });
  };

  const toggleIsEdit = (id) => {
    dispatch({ type: "toggleIsEdit", payload: id });
  };

  const editTodoHandler = (item) => {
    console.log("handler", item);
    dispatch({ type: "editTodo", payload: item });
  };

  const changeTitleHandler = (e) => {
    dispatch({ type: "changeTitle", payload: e.target.value });
  };

  const changeDateHandler = (e) => {
    dispatch({ type: "changeDate", payload: e.target.value });
  };

  const changeEditTitleHandler = (e) => {
    dispatch({ type: "changeEditTitle", payload: e.target.value });
  };

  return (
    <div>
      <TodoForm
        state={state}
        dispatch={dispatch}
        changeTitleHandler={changeTitleHandler}
        changeDateHandler={changeDateHandler}
      />
      <TodoList
        state={state}
        deleteTodoHandler={deleteTodoHandler}
        toggleIsEdit={toggleIsEdit}
        editTodoHandler={editTodoHandler}
        changeTitleHandler={changeEditTitleHandler}
      />
    </div>
  );
};

export default TodoWrapper;
