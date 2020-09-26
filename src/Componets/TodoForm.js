import React, { useContext, useEffect, useState } from "react";

import todoContext from "../Context";

export default function TodoForm() {
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    if (currentTodo.task) {
      setTodo(currentTodo.task);
    } else setTodo("");
  }, [currentTodo.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTodo.task) {
      dispatch({ type: "TODO_UPDATE", payload: todo });
    } else dispatch({ type: "TODO_ADD", payload: todo });
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        name="enter tasks"
        className="border border-black"
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      ></input>
    </form>
  );
}
