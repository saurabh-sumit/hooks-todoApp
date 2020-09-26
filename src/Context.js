import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, task: "eat breakFast", complete: false },
    { id: 2, task: "study", complete: false },
    { id: 3, task: "check mails", complete: true },
  ],
  currentTodo: {},
});

export default TodosContext;
