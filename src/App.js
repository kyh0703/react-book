import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import { useState, useCallback, useRef } from "react";
import { toIdentifier } from "../../../../AppData/Local/Microsoft/TypeScript/4.8/node_modules/@babel/types/lib/index";
import { useReducer } from "react";

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
};

const toDoReducer = (todos, action) => {
  switch (action.type) {
    // {type: "INSERT", todo: {id: 1, text: 'todo', checked: false}}
    case "INSERT":
      return todos.concat(action.todo);
    // {type: "REMOVE", id: 1}
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    // {type: "TOGGLE", id: 1}
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(toDoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  // Handle Func
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: "CREATE" }, todo);
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
