import React, { useContext } from "react";

import todoContext from "../Context";

export default function TodoList() {
  const { state, dispatch } = useContext(todoContext);
  const title =
    (state.todos || []).length > 0 ? `${state.todos.length} tasks` : "No Todos";

  return (
    <div className="container mx-auto mx-w-md text-center font-mono">
      <h1 className="text-3xl underline">{title}</h1>
      {(state.todos || []).map((todo) => (
        <li
          className="flex items-center bg-red-300 border border-black my-2 py-4"
          key={todo.id}
        >
          <span
            onDoubleClick={() =>
              dispatch({ type: "TODO_TOGGLE", payload: todo })
            }
            className={`flex-1 ml-12 cursor-pointer ${
              todo.complete && "line-through text-green-700 "
            }`}
          >
            {todo.task}
          </span>
          <button
            onClick={() => dispatch({ type: "TODO_CURRENT", payload: todo })}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            edit
          </button>
          <button
            onClick={() => dispatch({ type: "TODO_DELETE", payload: todo })}
            className="flex-2 ml-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            delete
          </button>
        </li>
      ))}
    </div>
  );
}
