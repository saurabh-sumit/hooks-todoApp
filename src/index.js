import * as serviceWorker from "./serviceWorker";

import React, { useContext, useReducer } from "react";

import ReactDOM from "react-dom";
import TodoForm from "./Componets/TodoForm";
import TodoList from "./Componets/TodoList";
import TodosContext from "./Context";
import TodosReducer from "./Reducer";

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
